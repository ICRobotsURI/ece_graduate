"""Small dependency-free validator for the static site."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.links = []
        self.images_without_alt = []
        self.markdown_sources = []
        self.lang = None
        self.title_depth = 0
        self.title_text = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag == "html":
            self.lang = attributes.get("lang")
        if "id" in attributes:
            self.ids.add(attributes["id"])
        if tag == "a" and "href" in attributes:
            self.links.append(attributes["href"])
        if tag == "img" and "alt" not in attributes:
            self.images_without_alt.append(attributes.get("src", "<unknown>"))
        if "data-markdown-source" in attributes:
            self.markdown_sources.append(attributes["data-markdown-source"])
        if tag == "title":
            self.title_depth += 1

    def handle_endtag(self, tag):
        if tag == "title":
            self.title_depth -= 1

    def handle_data(self, data):
        if self.title_depth:
            self.title_text.append(data)


def main():
    html_files = sorted(ROOT.glob("*.html"))
    pages = {}
    errors = []

    for path in html_files:
        parser = PageParser()
        parser.feed(path.read_text(encoding="utf-8"))
        pages[path.resolve()] = parser
        if parser.lang != "en":
            errors.append(f"{path.name}: missing or unexpected document language")
        if not "".join(parser.title_text).strip():
            errors.append(f"{path.name}: missing title")
        for image in parser.images_without_alt:
            errors.append(f"{path.name}: image without alt attribute: {image}")
        for source in parser.markdown_sources:
            source_path = (path.parent / source).resolve()
            if not source_path.exists():
                errors.append(f"{path.name}: missing Markdown source: {source}")

    for path, parser in pages.items():
        for href in parser.links:
            parts = urlsplit(href)
            if parts.scheme or parts.netloc or href.startswith(("mailto:", "tel:")):
                continue
            target_path = (path.parent / unquote(parts.path)).resolve() if parts.path else path
            if target_path.is_dir():
                target_path = target_path / "index.html"
            if not target_path.exists():
                errors.append(f"{path.name}: broken local link: {href}")
                continue
            if parts.fragment and target_path.suffix.lower() == ".html":
                target_parser = pages.get(target_path)
                if target_parser is None:
                    target_parser = PageParser()
                    target_parser.feed(target_path.read_text(encoding="utf-8"))
                if unquote(parts.fragment) not in target_parser.ids:
                    errors.append(f"{path.name}: missing anchor target: {href}")

    if errors:
        print("Site validation failed:")
        for error in errors:
            print(f"- {error}")
        raise SystemExit(1)

    print(f"Validated {len(html_files)} HTML pages: local links, anchors, Markdown sources, titles, language, and image alt text.")


if __name__ == "__main__":
    main()
