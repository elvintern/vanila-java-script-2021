// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");
// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;    
//     localStorage.setItem(USERNAME_KEY, username);
//     paintGreetings();
// }  


// loginForm.addEventListener("submit", onLoginSubmit);

// function paintGreetings() {
//     const username = localStorage.getItem(USERNAME_KEY);
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }


// const savedUsername = localStorage.getItem("username");

// if (savedUsername === null) {
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//     paintGreetings();
// }#

// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

// const title = document.querySelector("div.hello:first-child h1")

// console.dir(title);

// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function handleBtnClick() {
//     const value = loginInput.value;
//     if (value === "") {
//         console.log("Please write your name");
//     }
//     console.log(loginInput.value);
// }

// loginButton.addEventListener("click", handleBtnClick);

// const btn = document.getElementById("button");
// const result = document.getElementById("result");
// const resultResult = document.getElementById("resultresult")

// function playBtn(event) {
//     event.preventDefault();
//     const maxNum = document.getElementById("inputmaxnumber").value;
//     const number = Math.ceil(Math.random() * parseInt(maxNum))
//     const input = document.getElementById("inputchosenumber").value;
//     if (input == number) {
//         result.innerText = `You chose: ${input}, the machine chose: ${number}.`;
//         resultResult.innerText = "You Won!";
//     } else if (input != number) {
//         result.innerText = `You chose: ${input}, the machine chose: ${number}.`;
//         resultResult.innerText = "You Lost!";
//     }
// }

// btn.addEventListener("click", playBtn);

// const clockTitle = document.querySelector(".js-clock");
// const christmas = new Date("Dec 25, 2021 12:00:00").getTime();

// function getClock() {
//     const now = new Date().getTime();
//     const countDown = christmas - now;

//     if (countDown >= 0) {
//         const days = Math.floor((countDown / (1000 * 60 * 60 * 24)));
//         const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const mins = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
//         const secs = Math.floor((countDown % (1000 * 60)) / 1000);
//         clockTitle.innerText = `${days}d ${hours}h ${mins}m ${secs}s`;
//     } else {
//         document.querySelector(".js-clock").innerHTML = "The countdown is over!";
//     }
// }

// getClock();
// setInterval(getClock, 1000);
