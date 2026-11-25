let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");

let turn0 = true;
let count = 0;
let winner = document.querySelector("p");
let winnerpattern = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8], [0, 3, 6],[1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]
];
let gameOver = false;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameOver) return;
        if (turn0 === true) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        checkwinner();
    });

});
const checkwinner = () => {
    for (let pattern of winnerpattern) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                winner.innerText = `Congratulations! ${p1} is the winner!`;
                winner.classList.remove("visible");
                gameOver = true;
                for (let box of boxes) {
                    box.disabled = true;
                }
                return;
            }

        }

    }

    if (count === 9) {
        winner.innerText = "It's a draw! Nobody wins.";
        winner.classList.remove("visible");
        gameOver = true;
    }

};

reset.addEventListener("click", () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    count = 0;
    turn0 = true;
    gameOver = false;
    winner.classList.add("visible");
});