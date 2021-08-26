let alpha = "bcdefghi";
let randomId = "";

function getDrop() {
    let letterNum = Math.floor(Math.random() * 8);
    let letter = alpha[letterNum];

    let number = Math.floor(Math.random() * 8) + 1;

    let chosen = `${letter}${number}`;
    return chosen;
}

let container = document.querySelector("#container");
let span = document.querySelector("span");

const hoverOn = event => {
    if (randomId) {
        let lastDiv = document.querySelector(`#${randomId}`);
        lastDiv.style.backgroundColor = "transparent";
        lastDiv.style.border = "1px solid transparent";
        lastDiv.innerText = "";
    }
    let div = event.target;
    if (div.id !== "container") {
        div.style.backgroundColor = "rgba(128, 128, 128, .4)";
        div.style.border = "1px solid rgb(247, 247, 134)";
        div.innerText = event.target.id.toUpperCase();
    }
}

const hoverOff = event => {
    let div = event.target;
    if (div.id !== "container") {
        event.target.style.backgroundColor = "transparent";
        div.style.border = "1px solid transparent";
        div.innerText = "";
    }
}

const buttonClick = event => {
    if (randomId) {
        let lastDiv = document.querySelector(`#${randomId}`);
        lastDiv.style.backgroundColor = "transparent";
        lastDiv.style.border = "1px solid transparent";
        lastDiv.innerText = "";
    }
    randomId = getDrop();
    console.log(randomId);
    let chosenDiv = document.querySelector(`#${randomId}`);
    chosenDiv.style.backgroundColor = "rgba(128, 128, 128, .4)";
    chosenDiv.style.border = "1px solid rgb(247, 247, 134)";
    chosenDiv.innerText = randomId.toUpperCase();
    span.innerText = randomId.toUpperCase();
    span.style.visibility = "visible";

}

const button = document.querySelector("#button");

button.addEventListener("click", buttonClick);
container.addEventListener("mouseover", hoverOn);
container.addEventListener("mouseout", hoverOff);
