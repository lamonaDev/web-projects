//* constant values =>

const gradeA = 4;
const gradeB = 3;
const gradeC = 2;

const courseOneGrade = gradeA;
const courseTwoGrade = gradeB;
const courseThreeGrade = gradeB;
const courseFourGrade = gradeB;
const courseFiveGrade = gradeA;

const mainForm = document.forms[0];
const nameInput = document.querySelector(".name-input");
const courseOneInput = document.querySelector(".course-one-credit");
const courseTwoInput = document.querySelector(".course-two-credit");
const courseThreeInput = document.querySelector(".course-three-credit");
const courseFourInput = document.querySelector(".course-four-credit");
const courseFiveInput = document.querySelector(".course-five-credit");

const gpaDiv = document.querySelector("#calculated-gpa");
const studnetName = document.querySelector(".student-name-gpa");
const totalCredit = document.querySelector(".total-credit-number");
const totalGradePoints = document.querySelector(".total-grade-points-number");
const gpaNumber = document.querySelector(".grade-point-average-number");

studnetName.innerText = nameInput.innerText;
mainForm.onsubmit = function (e) {
    e.preventDefault();
    let totalC = 0;
    totalC += courseOneInput.valueAsNumber;
    totalC += courseTwoInput.valueAsNumber;
    totalC += courseThreeInput.valueAsNumber;
    totalC += courseFourInput.valueAsNumber;
    totalC += courseFiveInput.valueAsNumber;
    totalCredit.innerText = `${Number(totalC)}`;
    let nameVal = nameInput.value;
    studnetName.innerText = `${nameVal}`
    let totalGP = 0;
    totalGP += courseOneGrade * courseOneInput.valueAsNumber;
    totalGP += courseTwoGrade * courseTwoInput.valueAsNumber;
    totalGP += courseThreeGrade * courseThreeInput.valueAsNumber;
    totalGP += courseFourGrade * courseFourInput.valueAsNumber;
    totalGP += courseFiveGrade * courseFiveInput.valueAsNumber;
    totalGradePoints.innerText = `${Number(totalGP)}`
    let gpa = totalGP / totalC;
    let total = Number(totalGP / totalC);
    let mainNumber = Math.trunc(total);
    let float_1 = Math.trunc((Number(total) * 10) % 10);
    let float_2 = Math.trunc((Number(total) * 100) % 10);
    gpaNumber.innerText = `${mainNumber}.${float_1}${float_2}`
    gpaDiv.style.display = "inline"
}
const resetButton = document.querySelector("#reset-button");
resetButton.onclick = function (e) {
    if (gpaDiv.hasAttribute("hide")) {
        gpaDiv.style.display = "none";
    }
}
if (gpaDiv.hasAttribute("hide")) {
    gpaDiv.style.display = "none";
}