let studentName = document.getElementById("studentName");
studentName.innerText = "Arun Kumar";

let info = document.getElementsByClassName("info");
info[1].innerText = "Department: Information Technology";

let skills = document.getElementsByTagName("li");
skills[2].innerText = "Python";

let description = document.querySelector("#description");
description.innerText = "I am learning DOM manipulation";

let firstSkill = document.querySelector(".skill");
firstSkill.innerText = "HTML5";

let skillsHeading = document.querySelector("h2");
skillsHeading.innerText = "Technical Skills";

let allSkills = document.querySelectorAll(".skill");
allSkills[1].innerText = "Bootstrap";

studentName.innerText = "Atul Das";

description.textContent = "I am interested in web development";

let result = document.getElementById("result");

result.innerHTML = `
    <h2>Student Details</h2>
    <p>Name: Atul Das</p>
    <p>Course: MTECH</p>
    <p>Department: Information Technology</p>
`;
