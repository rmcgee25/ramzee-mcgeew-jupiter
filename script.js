const newDiv = document.createElement("div");

const footer = newDiv.appendChild(document.createElement("footer"));

document.body.appendChild(newDiv)

const today = new Date();
const thisYear = today.getFullYear();
const copyright  = document.createElement("p");
copyright.textContent = "Ramzee Mcgee-Williams " + thisYear;

footer.appendChild(copyright);

let skills = ["Javascript", "HTML", "CSS", "Github", "Salesforce", "Adobe Premier Video"]
const skillsSelection = document.getElementById("Skills");
const skillsList = skillsSelection.querySelector("ul");

for (let i=0; i <skills.length ; i++) {
    const skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

