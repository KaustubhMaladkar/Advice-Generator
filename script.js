// cache the DOM
const shuffle = document.querySelector(".shuffle");
const advice = document.querySelector("p.advice>q");
const adviceNumber = document.querySelector("p.advice-number>span")

class RandomAdvice {
    constructor() {
        const randomNumber = () => Math.floor(Math.random() * (220 - 1) + 1);
        fetch(`https://api.adviceslip.com/advice/${randomNumber()}`).then(advice => advice.json()).then(data => this.displayAdvice(data.slip));
    }

    displayAdvice(data) {
        advice.innerText = data.advice;
        adviceNumber.innerText = data.id;
    }
}

document.addEventListener("DOMContentLoaded", () => new RandomAdvice())

shuffle.addEventListener("click", () => new RandomAdvice())