let box = document.querySelectorAll(".btn");
let reset = document.querySelector("#res");
let turnO = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#newgame");
let messageContainer = document.querySelector("#message-container");

box.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (turnO) {
            btn.innerHTML = "O";
            turnO = false;
        } else {
            btn.innerHTML = "X";
            turnO = true;
        }
        btn.disabled = true;
        checkWinner();
    });
});

const disableboxes = () => {
    box.forEach((btn) => {
        btn.disabled = true;
    });
};

const enableboxes = () => {
    box.forEach((btn) => {
        btn.disabled = false;
        btn.innerHTML = "";
    });
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations! The winner is ${winner}`;
    messageContainer.classList.remove("msghide");
    disableboxes();
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = box[pattern[0]].innerHTML;
        let pos2val = box[pattern[1]].innerHTML;
        let pos3val = box[pattern[2]].innerHTML;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner");
                showWinner(pos1val);
                return;
            }
        }
    }
    // Check for draw
    if ([...box].every((btn) => btn.innerHTML !== "")) {
        msg.innerHTML = "It's a draw!";
        messageContainer.classList.remove("msghide");
    }
};

const resetgame = () => {
    turnO = true;
    enableboxes();
    messageContainer.classList.add("msghide");
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);