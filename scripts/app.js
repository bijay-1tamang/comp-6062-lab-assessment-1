console.log('scripts Loaded!');

const studentName = "BijayTamang";
const studentNumber = "1154366";

const result = `${studentName} - ${studentNumber}`;
console.log(result);

const headerContent = document.querySelector('h1');

headerContent.innerHTML = `${studentName} - ${studentNumber}`;

headerContent.classList.add('heading1');