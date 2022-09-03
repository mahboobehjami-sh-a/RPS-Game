const userChoiceByImage = document.querySelectorAll("img");
let userChoice = "";
let computerChoice = "";
let userScore = 0;
let userScoreHolder = document.getElementById("userScore");
let computerScore = 0;
let computerScoreHolder = document.getElementById("systemScore");
let userSelection = document.getElementById("userSelection");
let systemSelection = document.getElementById("systemSelection");
let time = 30;
let timerHolder = document.getElementById("timer");
let modal = document.getElementById("ShowModal");
let closeBtn = document.getElementById("close");
let winner = document.getElementById("Winner");

userChoiceByImage.forEach(function (item) {
    item.addEventListener("click", function (event) {
        userChoice = event.target.id;
        const choices = ["rock", "paper", "scissors"];
        const rndNum = Math.floor(Math.random() * 3);
        computerChoice = choices[rndNum];
        systemSelection.innerText = computerChoice;
        userSelection.innerText = userChoice;

        if (userChoice === computerChoice) {
            console.log("it is a tie")
        } else if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                userScore++;
                console.log("you win")
            } else {
                computerScore++;
                console.log("you lose")
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "rock") {
                userScore++;
                console.log("you win")
            } else {
                computerScore++;
                console.log("you lose")
            }
        } else if (userChoice === "scissors") {
            if (computerChoice === "paper") {
                userScore++;
                console.log("you win")
            } else {
                computerScore++;
                console.log("you lose")
            }
        }
        computerScoreHolder.innerText = computerScore;
        userScoreHolder.innerText = userScore;

        if (userScore === computerScore) {
            winner.innerText = "both Score is tie";
            document.getElementById("status").src = "./images/happy.png"
        } else if (userScore > computerScore) {
            winner.innerText = "You win!";
            document.getElementById("status").src = "./images/happy.png"
        } else {
            winner.innerText = "You Lose!";
            document.getElementById("status").src = "./images/cry.png"
        }
    })
})

function result() {
    time--;
    timerHolder.innerHTML = time;
    if (time === 0) {
        clearInterval(interval);
        console.log("timeout");
        modal.style.display = "block";
    }
}
const interval = setInterval(result, 1000);


closeBtn.onclick = function () {
    modal.style.display = "none";
    window.location.reload();
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none;"
        window.location.reload();
    }
}





