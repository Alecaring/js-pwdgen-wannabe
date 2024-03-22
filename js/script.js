const userName = prompt("Il tuo nome?");
console.log(userName, typeof userName);

const userSurname = prompt("Il tuo cognome?");
console.log(userSurname, typeof userSurname);

const userColor = prompt("Il tuo colore preferito?");
console.log(userColor, typeof userColor);

let randomNum = Math.floor((Math.random() * 99) + 1);
console.log(randomNum, typeof randomNum);

const passwordGen = `${userName}${userSurname}${userColor}${randomNum}`;
console.log(passwordGen, typeof passwordGen);

document.getElementById("passwordGen").innerHTML = passwordGen;