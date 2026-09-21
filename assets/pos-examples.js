const programExamples = [
  {
    group: 'MS thesis',
    label: 'MS thesis example 1',
    total: 31,
    courses: [
      ['ELE 539', 'Analog Integrated Circuit Design', 4],
      ['ELE 556', 'Introduction to Power Electronics', 3],
      ['ELE 569', 'Computer Systems for Modern Cloud Computing', 3],
      ['ELE 506', 'Digital Signal Processing', 4],
      ['ELE 568', 'Neural Engineering', 3],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 602', 'Graduate Seminar', 1],
      ['ELE 591', 'Special Problems', 3],
      ['ELE 599', "Master's Thesis Research", 9],
    ],
  },
  {
    group: 'MS thesis',
    label: 'MS thesis example 2',
    total: 31,
    courses: [
      ['CSC 561', 'Neural Networks and Deep Learning', 4],
      ['ELE 501', 'Linear Transform Analysis', 3],
      ['ELE 539', 'Analog Integrated Circuit Design', 4],
      ['ELE 569', 'Computer Systems for Modern Cloud Computing', 3],
      ['ELE 588', 'Applied Machine Learning', 3],
      ['ELE 591', 'Special Problems', 3],
      ['ELE 599', "Master's Thesis Research", 9],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 602', 'Graduate Seminar', 1],
    ],
  },
  {
    group: 'MS thesis',
    label: 'MS thesis example 3',
    total: 30,
    courses: [
      ['ELE 437', 'Introduction to Computer Networks', 3],
      ['ELE 438', 'Information Security', 4],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 599', "Master's Thesis Research", 9],
      ['ELE 591', 'Special Problems', 3],
      ['ELE 520X', 'Cyber Physical System Security', 3],
      ['ELE 509', 'Introduction to Random Processes', 4],
      ['ELE 594', 'Special Topics in Electrical Engineering', 3],
    ],
  },
  {
    group: 'MS thesis',
    label: 'MS thesis example 4',
    total: 30,
    courses: [
      ['ELE 501', 'Linear Transform Analysis', 3],
      ['ELE 503', 'Linear Control Systems', 4],
      ['ELE 509', 'Introduction to Random Processes', 4],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 550', 'Ocean Systems Engineering', 3],
      ['OCE 571', 'Underwater Acoustics I', 3],
      ['ELE 502', 'Nonlinear Control Systems', 3],
      ['ELE 599', "Master's Thesis Research", 6],
      ['OCE 592', 'Special Problems: Principles of Sonar and Underwater Sound', 3],
    ],
  },
  {
    group: 'MS thesis',
    label: 'MS thesis example 5',
    total: 30,
    courses: [
      ['ELE 502', 'Nonlinear Control Systems', 3],
      ['ELE 503', 'Linear Control Systems', 4],
      ['ELE 594', 'Applied Machine Learning', 3],
      ['ELE 599', "Master's Thesis Research", 9],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 520', 'Cyber Physical System Security', 3],
      ['CSC 561', 'Neural Networks and Deep Learning', 4],
      ['MCE 566', 'Mechanics of Robotic Manipulators', 3],
    ],
  },
  {
    group: 'MS thesis',
    label: 'MS thesis example 6',
    total: 30,
    courses: [
      ['ELE 547', 'Embedded Computer Systems and Applications', 4],
      ['ELE 591', 'Special Problems', 3],
      ['ELE 594', 'Special Topics in Electrical Engineering', 3],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 599', "Master's Thesis Research", 9],
      ['ELE 569', 'Computer Systems for Modern Cloud Computing', 3],
      ['ELE 520', 'Cyber Physical System Security', 3],
      ['CSC 561', 'Neural Networks and Deep Learning', 4],
    ],
  },
  {
    group: 'MS thesis',
    label: 'MS thesis example 7 — transfer credits',
    total: 30,
    note: 'Includes two 3-credit transfer courses.',
    courses: [
      ['ELE 509', 'Introduction to Random Processes', 4],
      ['ELE 564', 'Medical Imaging', 3],
      ['ELE 565', 'Medical Image Processing Laboratory', 1],
      ['ELE 591', 'Special Problems', 3],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 665', 'Modulation and Detection', 3],
      ['ELE 599', "Master's Thesis Research", 9],
      ['ELE XXX', 'Information Theory 2', 3, 'Transfer'],
      ['ELE XXX', 'Digital Signal Processing Laboratory', 3, 'Transfer'],
    ],
  },
  {
    group: 'MS thesis',
    label: 'MS thesis example 8 — transfer credits',
    total: 30,
    note: 'Includes two 3-credit transfer courses.',
    courses: [
      ['ELE 501', 'Linear Transform Analysis', 3],
      ['OCE 571', 'Underwater Acoustics I', 3],
      ['OCE 672', 'Underwater Acoustics II', 3],
      ['ELE 547', 'Embedded Computer Systems and Applications', 4],
      ['ELE 599', "Master's Thesis Research", 3],
      ['ELE 599', "Master's Thesis Research", 3],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 520', 'Cyber Physical System Security', 3, 'Transfer'],
      ['CSF 534', 'Advanced Topics in Network and System Security', 3, 'Transfer'],
    ],
  },
  {
    group: 'MS non-thesis',
    label: 'MS non-thesis example 1',
    total: 30,
    courses: [
      ['CSC 461', 'Machine Learning', 4],
      ['ELE 503', 'Linear Control Systems', 4],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 502', 'Nonlinear Control Systems', 3],
      ['MCE 566', 'Mechanics of Robotic Manipulators', 3],
      ['ELE 588', 'Applied Machine Learning', 3],
      ['ELE 591', 'Special Problems', 3],
      ['ELE 550', 'Ocean Systems Engineering', 3],
      ['ELE 594', 'Special Topics in Electrical Engineering', 3],
      ['ELE 598', 'Non-Thesis Master’s Project', 3],
    ],
  },
  {
    group: 'MS non-thesis',
    label: 'MS non-thesis example 2',
    total: 32,
    courses: [
      ['ELE 501', 'Linear Transform Analysis', 3],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 506', 'Digital Signal Processing', 4],
      ['ELE 437', 'Introduction to Computer Networks', 3],
      ['OCE 571', 'Underwater Acoustics I', 3],
      ['OCE 672', 'Underwater Acoustics II', 3],
      ['ELE 543', 'Computer Networks', 4],
      ['ELE 547', 'Embedded Computer Systems and Applications', 4],
      ['ELE 539', 'Analog Integrated Circuit Design', 4],
      ['ELE 598', 'Non-Thesis Master’s Project', 3],
    ],
  },
  {
    group: 'MS non-thesis',
    label: 'MS non-thesis example 3',
    total: 30,
    courses: [
      ['ELE 547', 'Embedded Computer Systems and Applications', 4],
      ['ELE 548', 'Computer Architecture', 4],
      ['ELE 503', 'Linear Control Systems', 4],
      ['ELE 550', 'Ocean Systems Engineering', 3],
      ['ELE 502', 'Nonlinear Control Systems', 3],
      ['ELE 544', 'Arithmetic Algorithms and Hardware Designs', 4],
      ['ELE 545', 'Advanced Digital Circuits and Systems', 4],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 598', 'Non-Thesis Master’s Project', 3],
    ],
  },
  {
    group: 'MS non-thesis',
    label: 'MS non-thesis example 4',
    total: 31,
    courses: [
      ['CSC 561', 'Neural Networks and Deep Learning', 4],
      ['ELE 503', 'Linear Control Systems', 4],
      ['ELE 591', 'Special Problems', 3],
      ['NEU 504', 'Neuroethics', 1],
      ['ELE 501', 'Linear Transform Analysis', 3],
      ['ELE 509', 'Introduction to Random Processes', 4],
      ['ELE 573', 'Brain Signal Processing and Application', 4],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 584', 'Pattern Recognition', 3],
      ['ELE 598', 'Non-Thesis Master’s Project', 3],
      ['ELE 602', 'Graduate Seminar', 1],
    ],
  },
  {
    group: 'MS non-thesis',
    label: 'MS non-thesis example 5',
    total: 31,
    courses: [
      ['ELE 503', 'Linear Control Systems', 4],
      ['ELE 501', 'Linear Transform Analysis', 3],
      ['ELE 509', 'Introduction to Random Processes', 4],
      ['ELE 601', 'Graduate Seminar', 1],
      ['ELE 602', 'Graduate Seminar', 1],
      ['ELE 447', 'Digital Integrated Circuits Design I', 4],
      ['ELE 448', 'Digital Integrated Circuits Design I Laboratory', 1],
      ['ELE 539', 'Analog Integrated Circuit Design', 4],
      ['ELE 591', 'Special Problems', 3],
      ['ELE 598', 'Non-Thesis Master’s Project', 3],
      ['ELE 502', 'Nonlinear Control Systems', 3],
    ],
  },
  {
    group: 'PhD',
    label: 'PhD example 1',
    total: 75,
    previousMasters: 30,
    courses: [
      ['ELE 699', 'Doctoral Dissertation Research', 24],
      ['ELE 548', 'Computer Architecture', 4],
      ['ELE 543', 'Computer Networks', 4],
      ['ELE 547', 'Embedded Computer Systems and Applications', 4],
      ['ELE 594', 'Special Topics in Electrical Engineering', 3],
      ['ELE 591', 'Special Problems', 3],
      ['ELE 569', 'Computer Systems for Modern Cloud Computing', 3],
    ],
  },
  {
    group: 'PhD',
    label: 'PhD example 2',
    total: 75,
    previousMasters: 30,
    courses: [
      ['ELE 699', 'Doctoral Dissertation Research', 24],
      ['ELE 548', 'Computer Architecture', 4],
      ['ELE 543', 'Computer Networks', 4],
      ['ELE 547', 'Embedded Computer Systems and Applications', 4],
      ['ELE 594', 'Special Topics in Electrical Engineering', 3],
      ['ELE 591', 'Special Problems', 3],
      ['ELE 569', 'Computer Systems for Modern Cloud Computing', 3],
    ],
  },
  {
    group: 'PhD',
    label: 'PhD example 3 — limited credits from prior master’s',
    total: 48,
    previousMasters: 4,
    courses: [
      ['ELE 501', 'Linear Transform Analysis', 3],
      ['ELE 506', 'Digital Signal Processing', 4],
      ['ELE 591', 'Special Problems', 3],
      ['ELE 509', 'Introduction to Random Processes', 4],
      ['ELE 699', 'Doctoral Dissertation Research', 3],
      ['ELE 661', 'Estimation Theory', 3],
      ['ELE 699', 'Doctoral Dissertation Research', 3],
      ['ELE 594', 'Special Topics in Electrical Engineering', 3],
      ['ELE 699', 'Doctoral Dissertation Research', 3],
      ['ELE 655', 'Modulation and Detection', 3],
      ['ELE 699', 'Doctoral Dissertation Research', 6],
      ['ELE 699', 'Doctoral Dissertation Research', 6],
    ],
  },
  {
    group: 'PhD',
    label: 'PhD example 4',
    total: 75,
    previousMasters: 30,
    courses: [
      ['ELE 503', 'Linear Control Systems', 4],
      ['ELE 520X', 'Cyber Physical System Security', 3],
      ['ELE 547', 'Embedded Computer Systems and Applications', 4],
      ['ELE 564', 'Medical Imaging', 3],
      ['ELE 539', 'Analog Integrated Circuit Design', 4],
      ['ELE 591', 'Special Problems', 3],
      ['ELE 699', 'Doctoral Dissertation Research', 24],
    ],
  },
  {
    group: 'PhD',
    label: 'PhD example 5',
    total: 72,
    previousMasters: 30,
    courses: [
      ['ELE 569', 'Computer Systems for Modern Cloud Computing', 3],
      ['ELE 547', 'Embedded Computer Systems and Applications', 4],
      ['CSC 561', 'Neural Networks and Deep Learning', 4],
      ['ELE 591', 'Special Problems', 3],
      ['ELE 548', 'Computer Architecture', 4],
      ['ELE 699', 'Doctoral Dissertation Research', 24],
    ],
  },
  {
    group: 'PhD',
    label: 'PhD example 6',
    total: 73,
    previousMasters: 30,
    courses: [
      ['ELE 591', 'Special Problems', 3],
      ['ELE 504', 'Optimal Control Theory', 3],
      ['ELE 562', 'Biomedical Instrumentation Design', 3],
      ['ELE 592', 'Special Problems', 3],
      ['ELE 564', 'Medical Imaging', 3],
      ['ELE 565', 'Medical Imaging Laboratory', 1],
      ['CHE 560', 'Micro and Nano Fabrication Engineering', 3],
      ['ELE 699', 'Doctoral Dissertation Research', 24],
    ],
  },
  {
    group: 'PhD',
    label: 'PhD example 7',
    total: 75,
    previousMasters: 30,
    courses: [
      ['OCE 571', 'Underwater Acoustics I', 3],
      ['ELE 594', 'Special Topics: Modern Clouds', 3],
      ['ELE 503', 'Linear Control Systems', 4],
      ['ELE 594', 'Special Topics: Probabilistic Robotics', 3],
      ['ELE 699', 'Doctoral Dissertation Research', 24],
      ['ELE 509', 'Random Processes', 4],
      ['ELE 547', 'Embedded Computer Systems and Applications', 4],
    ],
  },
  {
    group: 'Certificate',
    label: 'Embedded Systems certificate example',
    total: 12,
    courses: [
      ['ELE 547', 'Embedded Computer Systems and Applications', 4],
      ['ELE 543', 'Computer Networks', 4],
      ['ELE 548', 'Computer Architecture', 4],
    ],
  },
];

const groupOrder = ['MS thesis', 'MS non-thesis', 'PhD', 'Certificate'];
const examplesRoot = document.querySelector('[data-program-examples]');

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderExample(example) {
  const details = element('details', 'pos-example');
  const summary = element('summary');
  summary.append(element('span', 'pos-example-title', example.label));
  summary.append(element('span', 'pos-example-total', `${example.total} total credits`));
  details.append(summary);

  const body = element('div', 'pos-example-body');
  if (example.note) body.append(element('p', 'example-note', example.note));

  const tableWrap = element('div', 'table-scroll');
  const table = element('table', 'comparison pos-course-table');
  const caption = element('caption', 'visually-hidden', `${example.label} courses`);
  table.append(caption);
  const head = document.createElement('thead');
  head.innerHTML = '<tr><th scope="col">Course</th><th scope="col">Title</th><th scope="col">Credits</th><th scope="col">Type</th></tr>';
  table.append(head);
  const tbody = document.createElement('tbody');
  example.courses.forEach(([code, title, credits, type = 'URI']) => {
    const row = document.createElement('tr');
    [code, title, String(credits), type].forEach((value) => row.append(element('td', '', value)));
    tbody.append(row);
  });
  table.append(tbody);
  tableWrap.append(table);
  body.append(tableWrap);

  const uriCredits = example.courses.reduce((sum, course) => sum + course[2], 0);
  const totals = element('dl', 'example-totals');
  totals.innerHTML = `<div><dt>Listed course credits</dt><dd>${uriCredits}</dd></div>`;
  if (example.previousMasters !== undefined) {
    totals.innerHTML += `<div><dt>Credits applied from prior master’s degree</dt><dd>${example.previousMasters}</dd></div>`;
  }
  totals.innerHTML += `<div><dt>Total program credits shown on form</dt><dd>${example.total}</dd></div>`;
  body.append(totals);
  details.append(body);
  return details;
}

if (examplesRoot) {
  groupOrder.forEach((groupName) => {
    const section = element('section', 'example-group');
    section.append(element('h3', '', groupName));
    programExamples
      .filter((example) => example.group === groupName)
      .forEach((example) => section.append(renderExample(example)));
    examplesRoot.append(section);
  });
}

