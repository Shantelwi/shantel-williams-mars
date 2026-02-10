// footer info
let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerHTML = `Shantel Williams ${thisYear} ©️ `;

footer.appendChild(copyright);

//skills info
let skills = ["Javascript", "HTML", "CSS", "GitHub", "Nodejs", "Postman", "AWS", "MongoDB" ];

let skillsSection = document.getElementById("skills");

let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}