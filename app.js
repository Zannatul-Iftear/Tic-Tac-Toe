let boxes = document.querySelectorAll(".myButton");
let resetBtn = document.querySelector("#newGameButton");
let heading = document.querySelector("#heading");
let scoreText0 = document.querySelector("#scoreText0");
let scoreTextX = document.querySelector("#scoreTextX");

let turn0 = false;

player0 = [];
playerX = [];

score0 = 0;
scoreX = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "O";
            box.style.color = 'rgb(255, 88, 88)';
            turn0 = false;
            player0.push(parseInt(box.id[3]));
        }
        else{
            box.innerText = "X";
            box.style.color = 'rgb(73, 219, 255)';
            turn0 = true;
            playerX.push(parseInt(box.id[3]));
        }
        console.log("player0:",player0);
        console.log("playerX:",playerX);
        box.disabled=true;

        checkWinner();
    });
})


let checkWinner = () => {
    for(let i=0;i<8;i++){
        if ((boxes[winPatterns[i][0]].innerText == "X") && (boxes[winPatterns[i][1]].innerText == "X")
            && (boxes[winPatterns[i][2]].innerText == "X")) showWinner("X");
        if ((boxes[winPatterns[i][0]].innerText == "O") && (boxes[winPatterns[i][1]].innerText == "O")
            && (boxes[winPatterns[i][2]].innerText == "O")) showWinner("O");
    }
    if(heading.innerText=="Tic Tac Toe"){
        let counter=0;
        for(let box of boxes){
            if (box.innerText==""){counter++;}
        }
        if(counter==0) showDraw();
    }
    updateButtonStyle(turn0);
}

let showWinner = (winner) => {
    heading.innerText = "Player " + winner + " is the Winner!";
    if(winner=="X") {
        scoreX++; 
        scoreTextX.innerText = "Player X: "+ scoreX + " pts";
        heading.style.color = 'rgb(73, 219, 255)';
    }
    else {
        score0++; 
        scoreText0.innerText = "Player O: "+ score0 + " pts";
        heading.style.color = 'rgb(255, 88, 88)';
    }

    for(let button of boxes){
        button.disabled=true;
    }
}

let showDraw = () => {
    heading.innerText = "Draw!";
    heading.style.color = '#fff';
}

resetBtn.addEventListener("click", () => {
    heading.innerText="Tic Tac Toe";
    player0 = [];
    playerX = [];
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    heading.style.color = '#fff';
})

let updateButtonStyle = (turn0) => {
    for(let button of boxes){
        button.classList.remove('turn0');
        button.classList.remove('turn1');
    
        // Add class based on turn0 value
        if (turn0) {
            button.classList.add('turn0');
        } else {
            button.classList.add('turn1');
        }
    }
}