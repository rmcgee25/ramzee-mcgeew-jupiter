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

const messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementsByName('usersName')[0].value;
    let email = document.getElementsByName('usersEmail')[0].value;
    let text = document.getElementsByName('usersMessage')[0].value;

    console.log(username, email, text);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
    <a href = "mailto:${email}">${username}</a>
    <span>${text}</span>
    `;

    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function() {
        const entry = this.parentNode;
        entry.remove()
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});

