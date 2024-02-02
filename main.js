let gameSquares = document.querySelectorAll(".gameButton");
let gameSquaresArray = [];
let pieceName = document.querySelectorAll("#pieceName");
let pieceImage = document.querySelectorAll(".pieceImage");
let pieceImageArray = [];
console.log(pieceName);

let pieceImagesDictionary = {
    "WP": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/75px-Chess_plt45.svg.png",
    'BP': "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/75px-Chess_pdt45.svg.png",
};

//coloring board
let startColorGreen = true;
let squareIndex = 0;
for (let outerLoop = 0; outerLoop < 8; outerLoop++) {
    for (let innerLoop = 0; innerLoop < 8; innerLoop++) {
        if (startColorGreen) {
            if (squareIndex % 2 === 0) {
                gameSquares[squareIndex].style.background = "white";
            } else {
                gameSquares[squareIndex].style.background = "#81B64C";
            }
        } else {
            if (squareIndex % 2 === 0) {
                gameSquares[squareIndex].style.background = "#81B64C";
            } else {
                gameSquares[squareIndex].style.background = "white";
            }
        }
        squareIndex++;
    }
    startColorGreen = !startColorGreen;
}

//making array from nodeList
let tempArray1 = [];
let tempArray2 = [];
for (let i = 0; i < 64; i++) {
    tempArray1.push(gameSquares[i]);
    tempArray2.push(pieceImage[i]);
    if (i % 8 === 7) {
        gameSquaresArray.push(tempArray1);
        pieceImageArray.push(tempArray2);
        tempArray1 = [];
        tempArray2 = [];
    }
}

//adding event Listeners

let buttonClicked = [];
let turn = true;

function cutPiece(cutPieceRow,cutPieceCol,index,text){

    pieceImageArray[cutPieceRow][cutPieceCol].setAttribute("src", "");

    pieceImage[index].setAttribute("src",pieceImagesDictionary[text]);
    
    turn = !turn;

    pieceName[cutPieceRow*8 + cutPieceCol].textContent = '';
    
    pieceName[index].textContent = text;


}

gameSquares.forEach((value, index) => {
    gameSquares[index].addEventListener("click", () => {
        let column = index % 8;
        let row = Math.floor(index / 8);

        if (buttonClicked.length < 1) {
            buttonClicked.push([pieceName[index].textContent, row, column]);
            console.log(buttonClicked);
        } else {
            console.log(`button clicked = ${buttonClicked}`);

            //Black Pawn
            if (buttonClicked[0][0] === "BP") {
                console.log("black pawn aaya hai");
                if (!turn) {
                    //double movement checker
                    if (buttonClicked[0][1] === 1) {
                        if ((row === buttonClicked[0][1] + 1 || row === buttonClicked[0][1] + 2) && buttonClicked[0][2] === column) {
                            if(pieceName[index].textContent[0] !== 'W'){

                            cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,'BP')

                            }
                        }
                        else if(row === buttonClicked[0][1] + 1 && 
                            (buttonClicked[0][2] === column+1||buttonClicked[0][2] === column-1)){
    
                                if(pieceName[index].textContent[0] === 'W'){
                                    cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,'BP')
                                }
                        }
                    } 
                    //normal pawn checker
                    else if (row === buttonClicked[0][1] + 1 && buttonClicked[0][2] === column
                    ) {
                        if(pieceName[index].textContent[0] !== 'W'){
                            cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,'BP')
                        }
                    }
                    else if(row === buttonClicked[0][1] + 1 && 
                        (buttonClicked[0][2] === column+1||buttonClicked[0][2] === column-1)){

                            if(pieceName[index].textContent[0] === 'W'){

                                cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,'BP')

                            }
                    }
                }
            }

            //white pawn
            else if (buttonClicked[0][0] === "WP") {
                if (turn) {
                    console.log("white pawn hai bitch");
                    if (buttonClicked[0][1] === 6) {
                        if (
                            (row === buttonClicked[0][1] - 1 ||
                                row === buttonClicked[0][1] - 2) &&
                            buttonClicked[0][2] === column
                        ) {
                            if(pieceName[index].textContent != 'BP'){

                                cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,'WP')
                            }
                            else if(row === buttonClicked[0][1] - 1 && 
                                (buttonClicked[0][2] === column+1||buttonClicked[0][2] === column-1)){
        
                                    if(pieceName[index].textContent[0] === 'B'){
                                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,'WP')
                                    }
        
                            }
                        }
                    } else if (
                        row === buttonClicked[0][1] - 1 &&
                        buttonClicked[0][2] === column
                    ) {
                        if(pieceName[index].textContent[0] !== 'B'){
                            cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,'WP')
                        }
                    }
                    else if(row === buttonClicked[0][1] - 1 && 
                        (buttonClicked[0][2] === column+1||buttonClicked[0][2] === column-1)){

                            if(pieceName[index].textContent[0] === 'B'){
                                cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,'WP')
                            }
                    }
                }
            }

            //white knight
            else if(1===2){
               
            }

            //black knight
            else if(1===2){

            }

            buttonClicked = [];
        }
    });
});
