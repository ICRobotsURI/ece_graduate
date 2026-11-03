# URI ECE Graduate Guide

A student-first guide to graduate study in Electrical Engineering at the
University of Rhode Island.

## Preview locally

No build step or package installation is required. The requirements pages read
their Markdown source in the browser, so the site must be served through HTTP;
do not open `index.html` directly as a `file://` page. If Python is available:

```powershell
py -m http.server 8000
```

Then visit `http://localhost:8000`.

## Content principles

- Organize information around student tasks, not administrative offices.
- Explain each process in plain language before introducing policy language.
- Link to the official URI source for forms, deadlines, and authoritative rules.
- Include a visible verification date for time-sensitive information.
- Treat the Graduate School Manual and University Catalog as authoritative when
  local guidance conflicts with them.
## Source-controlled requirements

The MS and PhD requirement pages display the approved Markdown documents in `requirements/` directly in the browser. Edit `requirements/MSProgram.md` or `requirements/PhDProgram.md`, save it, and refresh the corresponding page. There is no generation command.

Because browsers restrict local file access, preview these pages through the local web server described above rather than by opening the HTML files with a `file://` URL.

Validate the generated pages and all local site links with:

```powershell
py scripts/validate_site.py
```
