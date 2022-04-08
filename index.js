let player1 = prompt("Whats Your Name???");
let player2 = prompt("Whats Your Opponents Name???");

function changeDice() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll(".player-text")[0].innerHTML = player1;
    document.querySelectorAll(".player-text")[1].innerHTML = player2;
    document
        .querySelector(".img1")
        .setAttribute("src", "images/dice" + dice1 + ".png");
    document
        .querySelector(".img2")
        .setAttribute("src", "images/dice" + dice2 + ".png");
    if (dice1 > dice2) {
        document.querySelector(".big-header").innerHTML = player1 + " beat " + player2 + "'s ass so bad";
    } else if (dice2 > dice1) {
        document.querySelector(".big-header").innerHTML = player2 + " kicked " + player1 + "'s ass";
    } else {
        document.querySelector(".big-header").innerHTML = "Boring YOu Drew";
    }
}

function changeDiceOnKey(event) {
    switch (event.key) {
        case "Enter":
            changeDice();
            break;
        default:
    }
}

document.querySelector(".big-header").addEventListener("click", changeDice);
document.addEventListener("keypress", function (press) {
    changeDiceOnKey(press);
});
