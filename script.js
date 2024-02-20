let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const drawMsg = () => {
    msg.innerText = "Game is Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++
        if (count == 9) {
            drawMsg();
            box.disabled = true;
            count = 0;
        }


    });

});

boxes.forEach((box) => {
    box.addEventListener("click", () => {



        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

    })
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        const showWinner = () => {
            msg.innerText = `Congratulations, ${pos1Val} is Winner`;
            msgContainer.classList.remove("hide");
            disableBoxes();
        };

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {

                showWinner();
                count = 0;

            }
        }
    }


};


newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);