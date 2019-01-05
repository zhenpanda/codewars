const testB = ["C_Yellow",
"E_Red",
"G_Yellow",
"B_Red",
"D_Yellow",
"B_Red",
"B_Yellow",
"G_Red",
"C_Yellow",
"C_Red",
"D_Yellow",
"F_Red",
"E_Yellow",
"A_Red",
"A_Yellow",
"G_Red",
"A_Yellow",
"F_Red",
"F_Yellow",
"D_Red",
"B_Yellow",
"E_Red",
"D_Yellow",
"A_Red",
"G_Yellow",
"D_Red",
"D_Yellow",
"C_Red"]

//return "Red", "Yellow" or "Draw"
function whoIsWinner(piecesPositionList){
    let b = ["A","B","C","D","E","F","G"].map((e) => {return [e,"","","","","",""]});
    let winner = "Draw";

    function placeAvailablePiece(rowArray,pieceColor) {
        let slot;
        for(let s=0;s<rowArray.length;s++) {
            if(rowArray[s] === "") { slot = s; break; };
        }
        rowArray[slot] = pieceColor;
        return rowArray;
    }

    // draw b with pieces placed
    piecesPositionList.map((p) => {
        let piece = p.split("_");
        switch(piece[0]) {
            case "A": 
                b[0] = placeAvailablePiece(b[0], piece[1]); 
                break;
            case "B": 
                b[1] = placeAvailablePiece(b[1], piece[1]); 
                break;
            case "C": 
                b[2] = placeAvailablePiece(b[2], piece[1]); 
                break;
            case "D": 
                b[3] = placeAvailablePiece(b[3], piece[1]); 
                break;
            case "E": 
                b[4] = placeAvailablePiece(b[4], piece[1]); 
                break;
            case "F": 
                b[5] = placeAvailablePiece(b[5], piece[1]); 
                break;
            case "G": 
                b[6] = placeAvailablePiece(b[6], piece[1]); 
                break;
            default: break;
        }
    });

    function colorMatcher(one,two,thr,four) {
        if(one === two && two === thr && thr === four && four !== "") {
            // console.log(one,two,thr,four);
            winner = four;
        }
    }
    
    // check horizontal
    for(let r=0;r<b.length;r++) {
        for(let h=1;h<b[r].length-3;h++) {
            colorMatcher(b[r][h], b[r][h+1], b[r][h+2], b[r][h+3]);
            // check slash
            if(r < 4) colorMatcher(b[r][h], b[r+1][h+1], b[r+2][h+2], b[r+3][h+3]);
            // check back-slash
            if(r > 3) colorMatcher(b[r][h], b[r-1][h+1], b[r-2][h+2], b[r-3][h+3])
        }
    }
    // check vertical
    for(let v=1;v<7;v++) {
        for(let c=0;c<b.length-3;c++) {
            colorMatcher(b[c][v], b[c+1][v], b[c+2][v], b[c+3][v]);
        }
    }
    
    return winner;
}

whoIsWinner(testB);