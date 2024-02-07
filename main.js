let gameSquares = document.querySelectorAll(".gameButton");
let gameSquaresArray = [];
let pieceName = document.querySelectorAll("#pieceName");
let pieceImage = document.querySelectorAll(".pieceImage");
let pieceImageArray = [];
console.log(gameSquares);

let pieceImagesDictionary = {
    "WP": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/75px-Chess_plt45.svg.png",
    'BP': "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/75px-Chess_pdt45.svg.png",
    "WN":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/75px-Chess_nlt45.svg.png",
    "BN":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/75px-Chess_ndt45.svg.png",
    "WB":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/75px-Chess_blt45.svg.png",
    "BB":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/75px-Chess_bdt45.svg.png"
};

//coloring board
document.addEventListener('DOMContentLoaded',colorBoard)
function colorBoard(){
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

function knightMovement(pieceColor,row,col){

    console.log(`in knightMovement pieceColor = ${pieceColor}`)
    
    {
        console.log("")
        console.log("in block 1")
        let tempRow= row -1;
        console.log(`tempRow = ${tempRow}`);
        {
            let tempCol = col -2;
            console.log(`tempCol = ${tempCol}`);

            if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){

                if(gameSquaresArray[tempRow][tempCol].textContent===""){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                } 
                else if(pieceName[tempRow*8 + tempCol].textContent[0]!==pieceColor){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                }
    
             }
        }
        {
            let tempCol = col +2;
            console.log(`tempCol = ${tempCol}`)
            if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){

                if(gameSquaresArray[tempRow][tempCol].textContent===""){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                } 
                else if(pieceName[tempRow*8 + tempCol].textContent[0]!==pieceColor){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                }
             }
        }
    }
    
    {
        console.log("")
        console.log("in block 2")
        let tempRow= row +1;
        console.log(`tempRow = ${tempRow}`)
        {
            let tempCol = col -2;
            console.log(`tempCol = ${tempCol}`)
            if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){

                if(gameSquaresArray[tempRow][tempCol].textContent===""){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                } 
                else if(pieceName[tempRow*8 + tempCol].textContent[0]!==pieceColor){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                }
                
             }
        }
        {
            let tempCol = col +2;
            console.log(`tempCol = ${tempCol}`)
            if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){

                if(gameSquaresArray[tempRow][tempCol].textContent===""){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                } 
                else if(pieceName[tempRow*8 + tempCol].textContent[0]!==pieceColor){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                }
                
             }
        }
    }
    
    {
        console.log("")
        console.log("in block 3")
        let tempRow= row +2;
        console.log(`tempRow = ${tempRow}`)
        {
            let tempCol = col -1;
            console.log(`tempCol = ${tempCol}`)
            if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){

                if(gameSquaresArray[tempRow][tempCol].textContent===""){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                } 
                else if(pieceName[tempRow*8 + tempCol].textContent[0]!==pieceColor){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                }
                
             }
        }
        {
            let tempCol = col +1;
            console.log(`tempCol = ${tempCol}`)
            if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){

                if(gameSquaresArray[tempRow][tempCol].textContent===""){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                } 
                else if(pieceName[tempRow*8 + tempCol].textContent[0]!==pieceColor){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                }
                
             }
        }
    }
    
    {
        console.log("")
        console.log("in block 4")
        let tempRow = row -2;
        console.log(`tempRow = ${tempRow}`)
        {
            let tempCol = col -1;
            console.log(`tempCol = ${tempCol}`)
            if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){
                
                if(gameSquaresArray[tempRow][tempCol].textContent===""){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                } 
                else if(pieceName[tempRow*8 + tempCol].textContent[0]!==pieceColor){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                }   
             }
        }
        {
            let tempCol = col +1;
            console.log(`tempCol = ${tempCol}`)
            if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){

                if(gameSquaresArray[tempRow][tempCol].textContent===""){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                } 
                else if(pieceName[tempRow*8 + tempCol].textContent[0]!==pieceColor){
                    gameSquaresArray[tempRow][tempCol].style.background="blue";
                }
                
             }
        }
    }
}

function movementMarker(upwardRow,downwardRow,rightDiagonal,leftDiagonal,pieceColor){
    
    let moreRightCol = false;
    let moreLeftCol = false;
    console.log('')
    console.log(`function call upwardRow = ${upwardRow} downwardRow = ${downwardRow} rightDiagonal = ${rightDiagonal} leftDiagonal = ${leftDiagonal}`)

    if(upwardRow< 0 && downwardRow > 7 && rightDiagonal >7 && leftDiagonal < 0){
        return;
    }
    else{
        if(upwardRow>-1){
            if(rightDiagonal<8 ){

                console.log(`first if ke first if mein`)
                console.log(`row = ${upwardRow} col = ${rightDiagonal}`)

                if(pieceName[upwardRow*8 + rightDiagonal].textContent===""){
                    gameSquaresArray[upwardRow][rightDiagonal].style.background="blue";
                    moreRightCol = true;
                } 
                else if(pieceName[upwardRow*8 + rightDiagonal].textContent[0]!==pieceColor){
                    gameSquaresArray[upwardRow][rightDiagonal].style.background="blue";
                    // moreRightCol = true;
                }

            }
            
            if(leftDiagonal>-1){

                console.log(`first if ke second if mein`)
                console.log(`row = ${upwardRow} col = ${leftDiagonal}`)

                if(pieceName[upwardRow*8 + leftDiagonal].textContent===""){
                    gameSquaresArray[upwardRow][leftDiagonal].style.background="blue";
                    moreLeftCol = true;
                } 
                else if(pieceName[upwardRow*8 + leftDiagonal].textContent[0]!==pieceColor){
                    gameSquaresArray[upwardRow][leftDiagonal].style.background="blue";
                    // moreLeftCol = true;
                }

            }
        }
        console.log("")

        if(downwardRow<8){
            if(rightDiagonal<8){

                console.log(`second if ke first if mein`)
                console.log(`row = ${downwardRow} col = ${rightDiagonal}`)

                if(pieceName[downwardRow*8 + rightDiagonal].textContent===""){
                    gameSquaresArray[downwardRow][rightDiagonal].style.background="blue";
                    moreRightCol = true;
                } 
                else if(pieceName[downwardRow*8 + rightDiagonal].textContent[0]!==pieceColor){
                    gameSquaresArray[downwardRow][rightDiagonal].style.background="blue";
                    // moreRightCol = true;
                }

            }
            
            if(leftDiagonal>-1){

                console.log(`second if ke second if mein`)
                console.log(`row = ${downwardRow} col = ${leftDiagonal}`)

                if(pieceName[downwardRow*8 + leftDiagonal].textContent===""){
                    gameSquaresArray[downwardRow][leftDiagonal].style.background="blue";
                    moreLeftCol = true;
                } 
                else if(pieceName[downwardRow*8 + leftDiagonal].textContent[0]!==pieceColor){
                    gameSquaresArray[downwardRow][leftDiagonal].style.background="blue";
                    // moreLeftCol = true;
                }

            }
        }

        if(moreRightCol && moreLeftCol){
            movementMarker(upwardRow-1,downwardRow+1,rightDiagonal+1,leftDiagonal-1,pieceColor);
        }
        else if(moreRightCol){
            movementMarker(upwardRow-1,downwardRow+1,rightDiagonal+1,-1,pieceColor);
        }
        else if(moreLeftCol){
            
            movementMarker(upwardRow-1,downwardRow+1,8,leftDiagonal-1,pieceColor);

        }
        else{

            movementMarker(-1,8,8,-1,pieceColor);

        }
    }
}

function bishopMovement(pieceColor,row,col){

    console.log(`pieceColor = ${pieceColor} row = ${row} col = ${col}`)

    console.log(`type of row = ${typeof row } col = ${typeof col}`)
    
    movementMarker(+row-1,+row+1,+col+1,+col-1,pieceColor);

}

function pawnMovement(pieceColor,row,col){
    
    console.log("in pawnMovement");
    console.log(`pieceColor = ${pieceColor} row = ${row} col = ${col}`)

    if(pieceColor==="W"){

        if(row===6){
            //next square
            if(pieceName[(row-1)*8 + col].textContent===""){

                gameSquaresArray[row-1][col].style.background = "blue";

            }
            //next to next square
            if(pieceName[(row-2)*8 + col].textContent===""){

                gameSquaresArray[row-2][col].style.background = "blue";

            }
            //right diagonal cut
            if(col+1<8){
                if(pieceName[(row-1)*8 + col+1].textContent[0]!==pieceColor && pieceName[(row-1)*8 + col+1].textContent!==""){
    
                    gameSquaresArray[row-1][col+1].style.background = "blue";
    
                }
            }
            // left diagonal cut
            if(col-1>-1){
                if(pieceName[(row-1)*8 + col-1].textContent[0]!==pieceColor && pieceName[(row-1)*8 + col-1].textContent!==""){
    
                    gameSquaresArray[row-1][col-1].style.background = "blue";
    
                }
            }

        }

        else{
            //one square checker
            if(pieceName[(row-1)*8 + col].textContent===""){

                gameSquaresArray[row-1][col].style.background = "blue";

            }

            //right diagonal cut
            if(pieceName[(row-1)*8 + col+1].textContent!==pieceColor && pieceName[(row-1)*8 + col +1].textContent!==""){

                gameSquaresArray[row-1][col+1].style.background = "blue";

            }

            //left diagonal cut
            if(pieceName[(row-1)*8 + col-1].textContent!==pieceColor && pieceName[(row-1)*8 + col -1].textContent!==""){

                gameSquaresArray[row-1][col-1].style.background = "blue";

            }

        }

    }

    else{

        if(row===1){
            //next square
            if(pieceName[(row+1)*8 + col].textContent===""){

                gameSquaresArray[row+1][col].style.background = "blue";

            }
            //next to next square
            if(pieceName[(row+2)*8 + col].textContent===""){

                gameSquaresArray[row+2][col].style.background = "blue";

            }
            //right diagonal cut
            if(col+1<8){
                if(pieceName[(row+1)*8 + col+1].textContent[0]!==pieceColor && pieceName[(row+1)*8 + col+1].textContent!==""){
    
                    gameSquaresArray[row+1][col+1].style.background = "blue";
    
                }
            }
            // left diagonal cut
            if(col-1>-1){
                if(pieceName[(row+1)*8 + col-1].textContent[0]!==pieceColor && pieceName[(row+1)*8 + col-1].textContent!==""){
    
                    gameSquaresArray[row+1][col-1].style.background = "blue";
    
                }
            }

        }

        else{
            //one square checker
            if(pieceName[(row+1)*8 + col].textContent===""){

                gameSquaresArray[row+1][col].style.background = "blue";

            }

            //right diagonal cut
            if(pieceName[(row+1)*8 + col+1].textContent!==pieceColor && pieceName[(row+1)*8 + col +1].textContent!==""){

                gameSquaresArray[row+1][col+1].style.background = "blue";

            }

            //left diagonal cut
            if(pieceName[(row+1)*8 + col-1].textContent!==pieceColor && pieceName[(row+1)*8 + col -1].textContent!==""){

                gameSquaresArray[row+1][col-1].style.background = "blue";

            }

        }

    }

}

gameSquares.forEach((value, index) => {
    gameSquares[index].addEventListener("click", () => {
        let column = index % 8;
        let row = Math.floor(index / 8);
        if (buttonClicked.length < 1 && pieceName[index].textContent!=="") {
            buttonClicked.push([pieceName[index].textContent, row, column]);
            console.log(buttonClicked);
            console.log(`index clicked = ${index}`);

            // knight
            if(buttonClicked[0][0][1]==="N"){

                knightMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2])

            }

            //bishops
            else if(buttonClicked[0][0][1]==="B"){

                bishopMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2])
                
            }

            //pawn
            else if(buttonClicked[0][0][1]==="P"){
                
                console.log("pawn aaya hai");

                pawnMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2]);

            }

            //casteling


        } 
        
        else {
            console.log(`button clicked = ${buttonClicked}`);

            //Black Pawn
            if (buttonClicked[0][0] === "BP") {
                console.log("black pawn aaya hai");
                if (!turn) {
                    //double movement checker
                    if(gameSquares[index].style.background==="blue"){
                        console.log("daal do piece")
                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"BP");
                        colorBoard();
                    }
                    else{
                        colorBoard();
                    }
                }
            }

            //white pawn
            else if (buttonClicked[0][0] === "WP") {
                if (turn) {
                    console.log("white pawn hai bitch");
                    if(gameSquares[index].style.background==="blue"){
                        console.log("daal do piece")
                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"WP");
                        colorBoard();
                    }
                    else{
                        colorBoard();
                    }
                }
            }

            //white knight
            else if(buttonClicked[0][0] === "WN"){
                if(gameSquares[index].style.background==="blue"){
                    console.log("daal do piece")
                    cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"WN");
                    colorBoard();
                }
                else{
                    colorBoard();
                }


            }

            //black knight
            else if(buttonClicked[0][0] === "BN"){
                if(gameSquares[index].style.background==="blue"){
                    console.log("daal do piece")
                    cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"BN");
                    colorBoard();
                }
                else{
                    colorBoard();
                }

            }

            // white bishop 
            else if(buttonClicked[0][0] === "WB"){
                console.log(`white bishop aaya hai`)

                if(gameSquares[index].style.background==="blue"){
                    console.log("daal do piece")
                    cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"WB");
                    colorBoard();
                }
                else{
                    colorBoard();
                }
            }


            // black bishop
            else if(buttonClicked[0][0] === "BB"){

                console.log("black bishop aaya hai")

                if(gameSquares[index].style.background==="blue"){
                    console.log("daal do piece")
                    cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"BB");
                    colorBoard();
                }
                else{
                    colorBoard();
                }
            }

            buttonClicked = [];
        }
    });
});