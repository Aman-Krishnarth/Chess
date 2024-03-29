//inCheck banao
// debug isSafe function
// isSafe mein pawn and king ko daalna hai

//board and piece related buttons
let gameSquares = document.querySelectorAll(".gameButton");
let gameSquaresArray = [];
let pieceName = document.querySelectorAll("#pieceName");
let pieceImage = document.querySelectorAll(".pieceImage");
let pieceImageArray = [];
console.log(gameSquares);

//game related buttons
let buttonClicked = [];
let turn = true;
let blackInCheck = false;
let whiteInCheck = false;

let pieceImagesDictionary = {
    "WP": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/75px-Chess_plt45.svg.png",
    'BP': "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/75px-Chess_pdt45.svg.png",
    "WN":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/75px-Chess_nlt45.svg.png",
    "BN":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/75px-Chess_ndt45.svg.png",
    "WB":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/75px-Chess_blt45.svg.png",
    "BB":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/75px-Chess_bdt45.svg.png",
    "WK":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/75px-Chess_klt45.svg.png",
    "BK":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/75px-Chess_kdt45.svg.png",
    "WR":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/75px-Chess_rlt45.svg.png",
    "BR":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/75px-Chess_rdt45.svg.png",
    "WQ":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/75px-Chess_qlt45.svg.png",
    "BQ":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/75px-Chess_qdt45.svg.png"
};

//coloring board
document.addEventListener('DOMContentLoaded',colorBoard)
function colorBoard(){
    let startColorGreen = true;
    let squareIndex = 0;
    for (let outerLoop = 0; outerLoop < 8; outerLoop++) {
        for (let innerLoop = 0; innerLoop < 8; innerLoop++) {

            if (startColorGreen) {

                if((pieceName[squareIndex].textContent==="BK" && blackInCheck ) || (pieceName[squareIndex].textContent==="WK" && whiteInCheck )){
                    gameSquares[squareIndex].style.background = "red";
                }
                else{
                    if (squareIndex % 2 === 0) {
                        gameSquares[squareIndex].style.background = "white";
                    } else {
                        gameSquares[squareIndex].style.background = "#81B64C";
                    }
                }

            } 
            else {
                if((pieceName[squareIndex].textContent==="BK" && blackInCheck ) || (pieceName[squareIndex].textContent==="WK" && whiteInCheck )){
                    gameSquares[squareIndex].style.background = "red";
                }
                else{
                    if (squareIndex % 2 === 0) {
                        gameSquares[squareIndex].style.background = "#81B64C";
                    } else {
                        gameSquares[squareIndex].style.background = "white";
                    }
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

function inCheck(){
    
    console.log("")
    console.log("from in check function")
    
    for(let index = 0;index<gameSquares.length;index++){

        if(pieceName[index].textContent!==""){

            let col = index % 8;
            let row = Math.floor(index / 8); 
            
            //white pawn
            if(pieceName[index].textContent==="WP"){
                
                console.log("in white pawn")
                console.log(`row = ${row} col = ${col}`)

                if(row-1>-1){
                    console.log("row-1>-1")

                    if(col+1<8){
                        console.log("")
                        console.log("right diagonal cut")
                        console.log(`row -1 = ${row-1} col+1 = ${col+1} if ki condition = ${pieceName[(row-1)*8 + col+1].textContent==="BK"}`)
                        //right diagonal cut
                        if(pieceName[(row-1)*8 + col+1].textContent==="BK"){
                            blackInCheck = true;    
                            return ;    
                        }
                    }
                    
                    if(col-1>-1){
                        console.log("left diagonal cut")
                        //left diagonal cut
                        if(pieceName[(row-1)*8 + col-1].textContent==="BK"){
                            blackInCheck = true;
                            return ;
                        }
                    }
                }
                
            }

            //black pawn
            else if(pieceName[index].textContent==="BP"){

                console.log("in black pawn")
                console.log(`row = ${row} col = ${col}`)

                if(row+1<8){
                    console.log("row-1>-1")

                    if(col+1<8){
                        console.log("")
                        console.log("right diagonal cut")
                        console.log(`row -1 = ${row-1} col+1 = ${col+1} if ki condition = ${pieceName[(row-1)*8 + col+1].textContent==="BK"}`)
                        //right diagonal cut
                        if(pieceName[(row+1)*8 + col+1].textContent==="WK"){
                            whiteInCheck = true;    
                            return ;    
                        }
                    }
                    
                    if(col-1>-1){
                        console.log("left diagonal cut")
                        //left diagonal cut
                        if(pieceName[(row+1)*8 + col-1].textContent==="WK"){
                            whiteInCheck = true;
                            return ;
                        }
                    }
                }

            }

            //white rook
            else if(pieceName[index].textContent==="WR"){

                // col check

                for(let c = 0;c<8;c++){

                    if(pieceName[row*8 + c].textContent!==""){
                        if(pieceName[row*8+c].textContent==="BK"){

                            blackInCheck = true;
                            return;

                        }
                    }

                }

                // row check

                for(let r =0 ; r<8;r++){

                    if(pieceName[r*8 + col].textContent!==""){
                        if(pieceName[r*8 + col].textContent==="BK"){
                            blackInCheck = true;
                            return;
                        }
                    }

                }

            }

            // black rook
            else if(pieceName[index].textContent==="BR"){

                // col check

                for(let c = 0;c<8;c++){

                    if(pieceName[row*8 + c].textContent!==""){
                        if(pieceName[row*8+c].textContent==="WK"){

                            whiteInCheck = true;
                            return;

                        }
                    }

                }

                // row check

                for(let r =0 ; r<8;r++){

                    if(pieceName[r*8 + col].textContent!==""){
                        if(pieceName[r*8 + col].textContent==="WK"){
                            whiteInCheck = true;
                            return;
                        }
                    }

                }

            }

            //white bishop
            else if(pieceName[index].textContent==="WB"){
                console.log(`in white bishop`)

                //left up diagonal
                {

                    let leftUpCol = col-1;
                    let leftUpRow = row-1;

                    while(leftUpCol>-1 && leftUpRow>-1){

                        if(pieceName[leftUpRow*8 + leftUpCol].textContent!==""){

                            if(pieceName[leftUpRow*8 + leftUpCol].textContent==="BK"){
                                blackInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        leftUpCol--;
                        leftUpRow--;

                    }

                }

                //right up diagonal
                {
                    console.log(`in right up diagonal`)
                    let rightUpCol = col+1;
                    let leftUpRow = row-1;

                    while(rightUpCol<8 && leftUpRow>-1){

                        console.log(`loop mein ghuste hue rightUpCol = ${rightUpCol} leftUpRow = ${leftUpRow}`)

                        if(pieceName[leftUpRow*8 + rightUpCol].textContent!==""){

                            if(pieceName[leftUpRow*8 + rightUpCol].textContent==="BK"){
                                blackInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        rightUpCol++;
                        leftUpRow--;

                    }
                    
                }

                //left down diagonal
                {

                    let leftUpCol = col-1;
                    let leftDownRow = row+1;

                    while(leftUpCol>-1 && leftDownRow<8){

                        if(pieceName[leftDownRow*8 + leftUpCol].textContent!==""){

                            if(pieceName[leftDownRow*8 + leftUpCol].textContent==="BK"){
                                blackInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        leftUpCol--;
                        leftDownRow++;

                    }

                }

                //right down diagonal
                {

                    let rightUpCol = col+1;
                    let rightDownRow = row+1;

                    while(rightUpCol<8 && rightDownRow<8){

                        if(pieceName[rightDownRow*8 + rightUpCol].textContent!==""){

                            if(pieceName[rightDownRow*8 + rightUpCol].textContent==="BK"){
                                blackInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        rightUpCol++;
                        rightDownRow++;

                    }
                    
                }

            }

            //black bishop
            else if(pieceName[index].textContent==="BB"){

                //left up diagonal
                {

                    let leftUpCol = col-1;
                    let leftUpRow = row-1;

                    while(leftUpCol>-1 && leftUpRow>-1){

                        if(pieceName[leftUpRow*8 + leftUpCol].textContent!==""){

                            if(pieceName[leftUpRow*8 + leftUpCol].textContent==="WK"){
                                whiteInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        leftUpCol--;
                        leftUpRow--;

                    }

                }

                //right up diagonal
                {

                    let rightUpCol = col+1;
                    let leftUpRow = row-1;

                    while(rightUpCol<8 && leftUpRow>-1){

                        if(pieceName[leftUpRow*8 + rightUpCol].textContent!==""){

                            if(pieceName[leftUpRow*8 + rightUpCol].textContent==="WK"){
                                whiteInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        rightUpCol++;
                        leftUpRow--;

                    }
                    
                }

                //left down diagonal
                {

                    let leftUpCol = col-1;
                    let leftDownRow = row+1;

                    while(leftUpCol>-1 && leftDownRow<8){

                        if(pieceName[leftDownRow*8 + leftUpCol].textContent!==""){

                            if(pieceName[leftDownRow*8 + leftUpCol].textContent==="WK"){
                                whiteInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        leftUpCol--;
                        leftDownRow++;

                    }

                }

                //right down diagonal
                {

                    let rightUpCol = col+1;
                    let rightDownRow = row+1;

                    while(rightUpCol<8 && rightDownRow<8){

                        if(pieceName[rightDownRow*8 + rightUpCol].textContent!==""){

                            if(pieceName[rightDownRow*8 + rightUpCol].textContent==="WK"){
                                whiteInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        rightUpCol++;
                        rightDownRow++;

                    }
                    
                }

            }

            //white knight
            else if(pieceName[index].textContent==="WN"){

                {
                    console.log("")
                    console.log("in block 1")
                    let tempRow= row -1;
                    console.log(`tempRow = ${tempRow}`);
                    {
                        let tempCol = col -2;
                        console.log(`tempCol = ${tempCol}`);
            
                        if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="BK"){
                                    blackInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
                            }
                
                         }
                    }
                    {
                        let tempCol = col +2;
                        console.log(`tempCol = ${tempCol}`)
                        if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="BK"){
                                    blackInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
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
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="BK"){
                                    blackInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
                            }
                            
                         }
                    }
                    {
                        let tempCol = col +2;
                        console.log(`tempCol = ${tempCol}`)
                        if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="BK"){
                                    blackInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
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
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="BK"){
                                    blackInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
                            }
                            
                         }
                    }
                    {
                        let tempCol = col +1;
                        console.log(`tempCol = ${tempCol}`)
                        if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="BK"){
                                    blackInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
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
                            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="BK"){
                                    blackInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
                            }  
                         }
                    }
                    {
                        let tempCol = col +1;
                        console.log(`tempCol = ${tempCol}`)
                        if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="BK"){
                                    blackInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
                            }
                            
                         }
                    }
                }

            }

            //black knight
            else if(pieceName[index].textContent==="BN"){

                {
                    console.log("")
                    console.log("in block 1")
                    let tempRow= row -1;
                    console.log(`tempRow = ${tempRow}`);
                    {
                        let tempCol = col -2;
                        console.log(`tempCol = ${tempCol}`);
            
                        if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="WK"){
                                    whiteInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
                            }
                
                         }
                    }
                    {
                        let tempCol = col +2;
                        console.log(`tempCol = ${tempCol}`)
                        if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="WK"){
                                    whiteInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
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
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="WK"){
                                    whiteInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
                            }
                            
                         }
                    }
                    {
                        let tempCol = col +2;
                        console.log(`tempCol = ${tempCol}`)
                        if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="WK"){
                                    whiteInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
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
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="WK"){
                                    whiteInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
                            }
                            
                         }
                    }
                    {
                        let tempCol = col +1;
                        console.log(`tempCol = ${tempCol}`)
                        if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="WK"){
                                    whiteInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
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
                            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="WK"){
                                    whiteInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
                            }  
                         }
                    }
                    {
                        let tempCol = col +1;
                        console.log(`tempCol = ${tempCol}`)
                        if((tempCol>-1 && tempCol<8)&&(tempRow> -1 && tempRow<8)&&(tempRow*8 + tempCol<64)){
            
                            if(pieceName[tempRow*8 + tempCol].textContent!==""){
                                if(pieceName[tempRow*8 + tempCol].textContent==="WK"){
                                    whiteInCheck = true;
                                    return;
                                }
                                else{
                                    return;
                                }
                            }
                            
                         }
                    }
                }

            }

            //white Queen
            else if(pieceName[index].textContent==="WQ"){

            //bishop check
                //left up diagonal
                {

                    let leftUpCol = col-1;
                    let leftUpRow = row-1;

                    while(leftUpCol>-1 && leftUpRow>-1){

                        if(pieceName[leftUpRow*8 + leftUpCol].textContent!==""){

                            if(pieceName[leftUpRow*8 + leftUpCol].textContent==="BK"){
                                blackInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        leftUpCol--;
                        leftUpRow--;

                    }

                }

                //right up diagonal
                {

                    let rightUpCol = col+1;
                    let leftUpRow = row-1;

                    while(rightUpCol<8 && leftUpRow>-1){

                        if(pieceName[leftUpRow*8 + rightUpCol].textContent!==""){

                            if(pieceName[leftUpRow*8 + rightUpCol].textContent==="BK"){
                                blackInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        rightUpCol++;
                        leftUpRow--;

                    }
                    
                }

                //left down diagonal
                {

                    let leftUpCol = col-1;
                    let leftDownRow = row+1;

                    while(leftUpCol>-1 && leftDownRow<8){

                        if(pieceName[leftDownRow*8 + leftUpCol].textContent!==""){

                            if(pieceName[leftDownRow*8 + leftUpCol].textContent==="BK"){
                                blackInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        leftUpCol--;
                        leftDownRow++;

                    }

                }

                //right down diagonal
                {

                    let rightUpCol = col+1;
                    let rightDownRow = row+1;

                    while(rightUpCol<8 && rightDownRow<8){

                        if(pieceName[rightDownRow*8 + rightUpCol].textContent!==""){

                            if(pieceName[rightDownRow*8 + rightUpCol].textContent==="BK"){
                                blackInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        rightUpCol++;
                        rightDownRow++;

                    }
                    
                }

            //rook check

            // col check
            for(let c = 0;c<8;c++){

                if(pieceName[row*8 + c].textContent!==""){
                    if(pieceName[row*8+c].textContent==="BK"){

                        blackInCheck = true;
                        return;

                    }
                }

            }

            // row check
            for(let r =0 ; r<8;r++){

                if(pieceName[r*8 + col].textContent!==""){
                    if(pieceName[r*8 + col].textContent==="BK"){
                        blackInCheck = true;
                        return;
                    }
                }

            }

            }

            //Black Queen
            else if(pieceName[index].textContent==="BQ"){

            // black bishop
                //left up diagonal
                {

                    let leftUpCol = col-1;
                    let leftUpRow = row-1;

                    while(leftUpCol>-1 && leftUpRow>-1){

                        if(pieceName[leftUpRow*8 + leftUpCol].textContent!==""){

                            if(pieceName[leftUpRow*8 + leftUpCol].textContent==="WK"){
                                whiteInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        leftUpCol--;
                        leftUpRow--;

                    }

                }

                //right up diagonal
                {

                    let rightUpCol = col+1;
                    let leftUpRow = row-1;

                    while(rightUpCol<8 && leftUpRow>-1){

                        if(pieceName[leftUpRow*8 + rightUpCol].textContent!==""){

                            if(pieceName[leftUpRow*8 + rightUpCol].textContent==="WK"){
                                whiteInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        rightUpCol++;
                        leftUpRow--;

                    }
                    
                }

                //left down diagonal
                {

                    let leftUpCol = col-1;
                    let leftDownRow = row+1;

                    while(leftUpCol>-1 && leftDownRow<8){

                        if(pieceName[leftDownRow*8 + leftUpCol].textContent!==""){

                            if(pieceName[leftDownRow*8 + leftUpCol].textContent==="WK"){
                                whiteInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        leftUpCol--;
                        leftDownRow++;

                    }

                }

                //right down diagonal
                {

                    let rightUpCol = col+1;
                    let rightDownRow = row+1;

                    while(rightUpCol<8 && rightDownRow<8){

                        if(pieceName[rightDownRow*8 + rightUpCol].textContent!==""){

                            if(pieceName[rightDownRow*8 + rightUpCol].textContent==="WK"){
                                whiteInCheck = true;
                                return;

                            }
                            else{
                                return;
                            }

                        }
                        rightUpCol++;
                        rightDownRow++;

                    }
                    
                }

            // black rook
                // col check

                for(let c = 0;c<8;c++){

                    if(pieceName[row*8 + c].textContent!==""){
                        if(pieceName[row*8+c].textContent==="WK"){

                            whiteInCheck = true;
                            return;

                        }
                    }

                }

                // row check

                for(let r =0 ; r<8;r++){

                    if(pieceName[r*8 + col].textContent!==""){
                        if(pieceName[r*8 + col].textContent==="WK"){
                            whiteInCheck = true;
                            return;
                        }
                    }

                }

            }

        }
    
    }

}

function cutPiece(cutPieceRow,cutPieceCol,index,text){

    pieceImageArray[cutPieceRow][cutPieceCol].setAttribute("src", "");

    pieceImage[index].setAttribute("src",pieceImagesDictionary[text]);
    
    turn = !turn;

    pieceName[cutPieceRow*8 + cutPieceCol].textContent = '';
    
    pieceName[index].textContent = text;

    inCheck();

}

function castle(clickedRow,clickedCol,kingRow,kingCol,pieceColor){

    if(clickedCol>kingCol){

        // right waale rook ko hatao
        pieceImageArray[clickedRow][7].setAttribute("src","");
        pieceName[clickedRow*8 + 7].textContent = "";

        //king ko clickedCol pe leke jao
        pieceImageArray[clickedRow][clickedCol].setAttribute("src",pieceImagesDictionary[`${pieceColor}K`]);
        pieceName[clickedRow*8 + clickedCol].textContent = `${pieceColor}K` ;

        pieceImageArray[kingRow][kingCol].setAttribute("src","");
        pieceName[kingRow*8 + kingCol].textContent = `` ;

        //rook ko clickedCol-1 pe leke aao
        pieceImageArray[clickedRow][clickedCol-1].setAttribute("src",pieceImagesDictionary[`${pieceColor}R`]);
        pieceName[clickedRow*8 + clickedCol-1].textContent = `${pieceColor}R` ;

    }

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

function bishopMovement(pieceColor,row,col){

    console.log("in bishop movement")
    console.log(`pieceColor = ${pieceColor} row = ${row} col = ${col}`)

    let leftUpCol = col-1;
    let leftDownCol = col-1;
    let rightUpCol = col + 1;
    let rightDownCol = col + 1;
    let upRow = row-1;
    let downRow = row+1;

    console.log("")
    if(upRow>-1){
        console.log(`in upRow = ${upRow}`)
        if(leftUpCol>-1){

            console.log(`in leftUpCol = ${leftUpCol}`)

            let dummyRow = upRow;
            while(leftUpCol>-1 && dummyRow>-1){
                console.log(`loop ke andar leftUpCol = ${leftUpCol} dummyRow = ${upRow}`)
                if(pieceName[dummyRow*8 + leftUpCol].textContent === ""){
    
                    gameSquaresArray[dummyRow][leftUpCol].style.background = "blue";
    
                }
                else if(pieceName[dummyRow*8 + leftUpCol].textContent[0] !== pieceColor){
                    gameSquaresArray[dummyRow][leftUpCol].style.background = "blue";
                    break;
                }
                else if(pieceName[dummyRow*8 + leftUpCol].textContent[0] === pieceColor){
                    break;
                }
                leftUpCol--;
                dummyRow--;
            }
        }

        if(rightUpCol<8){
            console.log(`in rightUpCol = ${rightUpCol}`)
            let dummyRow = upRow;
            while(rightUpCol<8 && dummyRow>-1){

                console.log(`loop ke andar leftUpCol = ${rightUpCol} dummyRow = ${upRow}`)

                if(pieceName[dummyRow*8 + rightUpCol].textContent === ""){
    
                    gameSquaresArray[dummyRow][rightUpCol].style.background = "blue";
    
                }
                else if(pieceName[dummyRow*8 + rightUpCol].textContent[0] !== pieceColor){
                    gameSquaresArray[dummyRow][rightUpCol].style.background = "blue";
                    break;
                }
                else if(pieceName[dummyRow*8 + rightUpCol].textContent[0] === pieceColor){
                    break;
                }
                rightUpCol++;
                dummyRow--;
            }

        }
    }

    if(downRow<8){
        console.log(`in downRow = ${downRow}`)

        if(leftDownCol>-1){
            console.log(`in leftDownCol`)

            let dummyRow = downRow;
            while(leftDownCol>-1 && dummyRow<8){
                
                console.log(`loop mein leftDownCol = ${leftDownCol} dummyRow = ${dummyRow}`)

                if(pieceName[dummyRow*8 + leftDownCol].textContent === ""){
    
                    gameSquaresArray[dummyRow][leftDownCol].style.background = "blue";
    
                }
                else if(pieceName[dummyRow*8 + leftDownCol].textContent[0] !== pieceColor){
                    gameSquaresArray[dummyRow][leftDownCol].style.background = "blue";
                    break;
                }
                else if(pieceName[dummyRow*8 + leftDownCol].textContent[0] === pieceColor){
                    break;
                }
                leftDownCol--;
                dummyRow++;
            }
        }

        if(rightDownCol<8 ){
            console.log(`in rightDownCol`)

            let dummyRow = downRow;
            while(rightDownCol<8){
                console.log(`loop mein rightDownCol = ${rightDownCol} dummyRow = ${dummyRow}`)

                if(pieceName[dummyRow*8 + rightDownCol].textContent === ""){
    
                    gameSquaresArray[dummyRow][rightDownCol].style.background = "blue";
    
                }
                else if(pieceName[dummyRow*8 + rightDownCol].textContent[0] !== pieceColor){
                    gameSquaresArray[dummyRow][rightDownCol].style.background = "blue";
                    break;
                }
                else if(pieceName[dummyRow*8 + rightUpCol].textContent[0] === pieceColor){
                    break;
                }
                rightDownCol++;
                dummyRow++;
            }

        }

    }

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
                    console.log("idhar se blue kiya")
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
            if(pieceName[(row+1)*8 + col+1].textContent[0]!==pieceColor && pieceName[(row+1)*8 + col +1].textContent!==""){
                console.log("idhar se print karaya")

                gameSquaresArray[row+1][col+1].style.background = "blue";

            }

            //left diagonal cut
            if(pieceName[(row+1)*8 + col-1].textContent[0]!==pieceColor && pieceName[(row+1)*8 + col -1].textContent!==""){

                gameSquaresArray[row+1][col-1].style.background = "blue";

            }

        }

    }

}

function isSafe(row,col,pieceColor){
    console.log(`in isSafe row = ${row} col = ${col} pieceColor = ${pieceColor}`)

    
    console.log("bahar se true return kara diya")
    return true;

}

function kingMovement(pieceColor,row,col){

    console.log("in kings movement");
    console.log(`pieceColor = ${pieceColor} row = ${row} col = ${col}`);

    if(col+1<8){
        if(pieceName[row*8 + col+1].textContent===""  && isSafe(row,col+1,pieceColor)){
    
            gameSquaresArray[row][col+1].style.background = "blue";
    
        }
        else if(pieceName[row*8 + col+1].textContent[0]!==pieceColor && isSafe(row,col+1,pieceColor)){
            gameSquaresArray[row][col+1].style.background = "blue";
        }

        if(row-1>-1){

            console.log(`row -1 = ${row-1} col+1 = ${col+1}`)
            if(pieceName[(row-1)*8 + col+1].textContent===""  && isSafe(row-1,col+1,pieceColor)){
    
                gameSquaresArray[row-1][col+1].style.background = "blue";
        
            }
            else if(pieceName[(row-1)*8 + col+1].textContent[0]!==pieceColor && isSafe(row-1,col+1,pieceColor)){
                gameSquaresArray[row-1][col+1].style.background = "blue";
            }

        }

        if(row+1<8){
            if(pieceName[(row+1)*8 + col+1].textContent==="" && isSafe(row+1,col+1,pieceColor)){
    
                gameSquaresArray[row+1][col+1].style.background = "blue";
        
            }

            else if(pieceName[(row+1)*8 + col+1].textContent[0]!==pieceColor && isSafe(row+1,col+1,pieceColor)){
            gameSquaresArray[row+1][col+1].style.background = "blue";
        }


        }
    }

    if(col+2<8){
        if(pieceName[row*8 + col+2].textContent==="" && isSafe(row,col+2,pieceColor)){
    
            gameSquaresArray[row][col+2].style.background = "blue";
    
        }

        else if(pieceName[row*8 + col+2].textContent[0]!==pieceColor && isSafe(row,col+2,pieceColor)){
            gameSquaresArray[row][col+2].style.background = "blue";
        }

    }

    if(col-1>-1){
        if(pieceName[row*8 + col-1].textContent===""  && isSafe(row,col-1,pieceColor)){
    
            gameSquaresArray[row][col-1].style.background = "blue";
    
        }
        else if(pieceName[row*8 + col-1].textContent[0]!==pieceColor && isSafe(row,col-1,pieceColor)){
            gameSquaresArray[row][col-1].style.background = "blue";
        }

        if(row-1>-1){

            if(pieceName[(row-1)*8 + col-1].textContent==="" && isSafe(row-1,col-1,pieceColor)){
    
                gameSquaresArray[row-1][col-1].style.background = "blue";
        
            }

            else if(pieceName[(row-1)*8 + col-1].textContent[0]!==pieceColor && isSafe(row-1,col-1,pieceColor)){
            gameSquaresArray[row-1][col-1].style.background = "blue";
        }


        }

        if(row+1<8){
            if(pieceName[(row+1)*8 + col-1].textContent==="" && isSafe(row+1,col-1,pieceColor)){
    
                gameSquaresArray[row+1][col-1].style.background = "blue";
        
            }

            else if(pieceName[(row+1)*8 + col-1].textContent[0]!==pieceColor && isSafe(row+1,col-1,pieceColor)){
            gameSquaresArray[row+1][col-1].style.background = "blue";
        }


        }
    }

    if(row-1>-1){

        if(pieceName[(row-1)*8 + col].textContent==="" && isSafe(row-1,col,pieceColor)){
    
            gameSquaresArray[row-1][col].style.background = "blue";
    
        }

        else if(pieceName[(row-1)*8 + col].textContent[0]!==pieceColor && isSafe(row-1,col,pieceColor)){
            gameSquaresArray[row-1][col].style.background = "blue";
        }

    }

    if(row+1<8){

        if(pieceName[(row+1)*8 + col].textContent==="" && isSafe(row+1,col,pieceColor)){
    
            gameSquaresArray[row+1][col].style.background = "blue";
    
        }

        else if(pieceName[(row+1)*8 + col].textContent[0]!==pieceColor && isSafe(row+1,col,pieceColor)){
            gameSquaresArray[row+1][col].style.background = "blue";
        }

    }

}

function rookMovement(pieceColor,row,col){

    console.log(`in rook movement pieceColor = ${pieceColor} row = ${row} col = ${col}`)

    let rowUp = row-1;
    let rowDown = row+1;
    let colLeft = col-1;
    let colRight = col+1;

    while(rowUp>-1){
        console.log(`in rowup row = ${rowUp}`)

        if(pieceName[rowUp*8 + col].textContent===""){
            gameSquaresArray[rowUp][col].style.background = "blue"
        }
        else if(pieceName[rowUp*8+col].textContent[0]!==pieceColor){
            gameSquaresArray[rowUp][col].style.background = "blue"
            break;
        }
        else if(pieceName[rowUp*8+col].textContent[0]===pieceColor){
            break;
        }
        rowUp--;
    }

    while(rowDown<8){

        console.log(`in rowDOwn`)
        if(pieceName[rowDown*8+col].textContent===""){
            gameSquaresArray[rowDown][col].style.background = "blue"
        }
        else if(pieceName[rowDown*8+col].textContent[0]!==pieceColor){
            gameSquaresArray[rowDown][col].style.background = "blue"
            break;
        }
        else if(pieceName[rowDown*8+col].textContent[0]===pieceColor){
            break;
        }

        rowDown++;

    }

    while(colLeft>-1){

        console.log(`in col left`)

        console.log(`row = ${row} col = ${colLeft}`)
        if(pieceName[row*8 + colLeft].textContent===""){
            gameSquaresArray[row][colLeft].style.background = "blue"
        }
        else if(pieceName[row*8 + colLeft].textContent[0]!==pieceColor){
            gameSquaresArray[row][colLeft].style.background = "blue"
            break;
        }
        else if(pieceName[row*8 +colLeft].textContent[0]===pieceColor){
            break;
        }
        colLeft--;
    }

    while(colRight<8){

        console.log(`in colRight`)
        if(pieceName[row*8 +colRight].textContent===""){
            gameSquaresArray[row][colRight].style.background = "blue"
        }
        else if(pieceName[row*8 +colRight].textContent[0]!==pieceColor){
            gameSquaresArray[row][colRight].style.background = "blue"
            break;
        }
        else if(pieceName[row*8 +colRight].textContent[0]===pieceColor){
            break;
        }

        colRight++;

    }

}

function queenMovement(pieceColor,row,col){

    console.log(`in queen movement pieceColor = ${pieceColor} row = ${row} col = ${col}`)

    rookMovement(pieceColor,row,col);

    bishopMovement(pieceColor,row,col);

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
                if(!turn && buttonClicked[0][0][0]==="B"){
                    knightMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2])
                }
                if(turn && buttonClicked[0][0][0]==="W"){
                    knightMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2])

                }
            }

            //bishops
            else if(buttonClicked[0][0][1]==="B"){

                if(!turn && buttonClicked[0][0][0]==="B"){

                    bishopMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2])
                }
                if(turn && buttonClicked[0][0][0]==="W"){
                    bishopMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2])

                }
                
            }

            //pawn
            else if(buttonClicked[0][0][1]==="P"){
                
                console.log("pawn aaya hai");
                if(!turn && buttonClicked[0][0][0]==="B"){
                    pawnMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2]);
                }
                if(turn && buttonClicked[0][0][0]==="W"){
                    pawnMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2]);
                }

            }

            // king movement
            else if(buttonClicked[0][0][1]==="K"){

                console.log("king aaya hai full power");
                if(!turn && buttonClicked[0][0][0]==="B"){
                    kingMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2]);
                }
                if(turn && buttonClicked[0][0][0]==="W"){
                    kingMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2]);
                }

            }

            // rook movement
            else if(buttonClicked[0][0][1]==="R"){

                console.log("rook aaya hai");
                if(!turn && buttonClicked[0][0][0]==="B"){

                    rookMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2]);
                }
                if(turn && buttonClicked[0][0][0]==="W"){
                    rookMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2]);

                }

            }

            // queen movement
            else if(buttonClicked[0][0][1]=="Q"){

                console.log("queen aaya hai");
                if(!turn && buttonClicked[0][0][0]==="B"){

                    queenMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2]);
                }
                if(turn && buttonClicked[0][0][0]==="W"){
                    queenMovement(buttonClicked[0][0][0],buttonClicked[0][1],buttonClicked[0][2]);

                }
            }

        } 
        
        else {
            console.log("")
            console.log(`button clicked = ${buttonClicked}`);

            //Black Pawn
            if (buttonClicked[0][0] === "BP") {
                console.log("black pawn aaya hai");
                if (!turn) {
                    if(gameSquares[index].style.background==="blue"){
                        console.log("daal do piece")
                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"BP");
                        colorBoard();
                    }
                    else{
                        colorBoard();
                    }
                }
                else{
                    colorBoard();
                }
            }

            //white pawn
            else if (buttonClicked[0][0] === "WP") {
                if (turn) {
                    if(gameSquares[index].style.background==="blue"){
                        console.log("daal do piece")
                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"WP");
                        colorBoard();
                    }
                    else{
                        colorBoard();
                    }
                }
                else{
                    colorBoard();
                }
            }

            //white knight
            else if(buttonClicked[0][0] === "WN"){
                if(turn){
                    if(gameSquares[index].style.background==="blue"){
                        console.log("daal do piece")
                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"WN");
                        colorBoard();
                    }
                    else{
                        colorBoard();
                    }
                }
                else{
                    colorBoard();
                }
            }

            //black knight
            else if(buttonClicked[0][0] === "BN"){
                if(!turn){
                    if(gameSquares[index].style.background==="blue"){
                        console.log("daal do piece")
                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"BN");
                        colorBoard();
                    }
                    else{
                        colorBoard();
                    }
                }
                else{
                    colorBoard();
                }
            }

            // white bishop 
            else if(buttonClicked[0][0] === "WB"){
                if(turn){
                    if(gameSquares[index].style.background==="blue"){
                        console.log("daal do piece")
                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"WB");
                        colorBoard();
                    }
                    else{
                        colorBoard();
                    }
                }
                else{
                    colorBoard();
                }
            }

            // black bishop
            else if(buttonClicked[0][0] === "BB"){
                if(!turn){
                    if(gameSquares[index].style.background==="blue"){
                        console.log("daal do piece")
                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"BB");
                        colorBoard();
                    }
                    else{
                        colorBoard();
                    }
                }
                else{
                    colorBoard();
                }
            }

            //white king
            else if(buttonClicked[0][0]==="WK"){
                if(turn){
                    console.log(`index = ${index}`);
                    let kingRow = buttonClicked[0][1];
                    let kingColumn = buttonClicked[0][2];
                    let clickedColumn = index % 8;
                    let clickedRow = Math.floor(index / 8);
    
                    console.log(`kingCol = ${kingColumn} kingRow = ${kingRow}`);
                    console.log(`clickedCol = ${clickedColumn} clickedRow = ${clickedRow}`);
    
                    if(kingColumn<clickedColumn){
    
    
                        if(clickedColumn-kingColumn===2){
    
                            // castle(clickedRow,clickedColumn,kingRow,kingColumn,buttonClicked[0][0][0])
                            // colorBoard();
    
                            if(gameSquares[index].style.background==="blue"){
                                console.log("daal do piece")
                                castle(clickedRow,clickedColumn,kingRow,kingColumn,buttonClicked[0][0][0])
                                colorBoard();
                            }
                            else{
                                colorBoard();
                            }
                        }
                        else{
    
                            if(gameSquares[index].style.background==="blue"){
                                console.log("daal do piece")
                                cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"WK");
                                colorBoard();
                            }
                            else{
                                colorBoard();
                            }
    
                        }
                        
                    }
    
                    else {
    
                        if(gameSquares[index].style.background==="blue"){
                            console.log("daal do piece")
                            cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"WK");
                            colorBoard();
                        }
                        else{
                            colorBoard();
                        }
    
                    }
                }
                else{
                    colorBoard();
                }
            }

            //black king
            else if(buttonClicked[0][0]==="BK"){
                if(!turn){
                    console.log(`index = ${index}`);
                    let kingRow = buttonClicked[0][1];
                    let kingColumn = buttonClicked[0][2];
                    let clickedColumn = index % 8;
                    let clickedRow = Math.floor(index / 8);
    
                    console.log(`kingCol = ${kingColumn} kingRow = ${kingRow}`);
                    console.log(`clickedCol = ${clickedColumn} clickedRow = ${clickedRow}`);
    
                    if(kingColumn<clickedColumn){
    
    
                        if(clickedColumn-kingColumn===2){
    
                            if(gameSquares[index].style.background==="blue"){
                                console.log("daal do piece")
                                castle(clickedRow,clickedColumn,kingRow,kingColumn,buttonClicked[0][0][0])
                                colorBoard();
                            }
                            else{
                                colorBoard();
                            }
                        }
                        else{
    
                            if(gameSquares[index].style.background==="blue"){
                                console.log("daal do piece")
                                cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"BK");
                                colorBoard();
                            }
                            else{
                                colorBoard();
                            }
    
                        }
                        
                    }
                    
                    else{
    
                        if(gameSquares[index].style.background==="blue"){
                            console.log("daal do piece")
                            cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"BK");
                            colorBoard();
                        }
                        else{
                            colorBoard();
                        }
    
                    }
                }
                else{
                    colorBoard();
                }
                
            }

            //white rook
            else if(buttonClicked[0][0]=="WR"){
                if(turn){
                    if(gameSquares[index].style.background==="blue"){
                        console.log("daal do piece")
                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"WR");
                        colorBoard();
                    }
                    else{
                        colorBoard();
                    }
                }
                else{
                    colorBoard();
                }

            }

            //black rook
            else if(buttonClicked[0][0]=="BR"){
                if(!turn){
                    if(gameSquares[index].style.background==="blue"){
                        console.log("daal do piece")
                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"BR");
                        colorBoard();
                    }
                    else{
                        colorBoard();
                    }
                }
                else{
                    colorBoard();
                }

            }

            //White queen
            else if(buttonClicked[0][0]=="WQ"){
                if(turn){
                    if(gameSquares[index].style.background==="blue"){
                        console.log("daal do piece")
                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"WQ");
                        colorBoard();
                    }
                    else{
                        colorBoard();
                    }
                }
                else{
                    colorBoard();
                }

            }

            //Black queen
            else if(buttonClicked[0][0]=="BQ"){
                if(!turn){
                    if(gameSquares[index].style.background==="blue"){
                        console.log("daal do piece")
                        cutPiece(buttonClicked[0][1],buttonClicked[0][2],index,"BQ");
                        colorBoard();
                    }
                    else{
                        colorBoard();
                    }
                }
                else{
                    colorBoard();
                }

            }

            buttonClicked = [];
        }
    });
});