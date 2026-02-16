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

//message form
let messageForm = document.querySelector('form[name = "leave_message"]')

messageForm.addEventListener("submit", myFunction);

function myFunction(event){
    event.preventDefault();

    const form = event.target;

    const userName = form.userName.value;

    const userEmail = form.userEmail.value;

    const usersMessage = form.usersMessage.value;


    console.log(form.userName.value);

    console.log(form.userEmail.value);

   console.log(form.usersMessage.value);

    //display messages in list
   let messageSection = document.getElementById('messages');

   let messageList = messageSection.querySelector('ul');

   let newMessage = document.createElement('li');

   newMessage.innerHTML = `<a href='mailto:${userEmail}'>${userName}</a> <span>${usersMessage}</span>`;

   let removeButton = document.createElement('button');

   removeButton.textContent = 'remove';

   removeButton.setAttribute('type', 'button');

   removeButton.addEventListener('click', btnFunction);

   function btnFunction(event){
    let entry = event.target.parentNode;
    entry.remove();
   };

   newMessage.appendChild(removeButton);

   messageList.appendChild(newMessage);

   form.reset();
};
