document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("get-num-button");
    const numField = document.getElementById("num");
    
    button.addEventListener("click", () => {
        
        function createDiv() {
            let boardDiv = document.createElement("div");
            boardDiv.className = "new-div";
            boardDiv.style.minWidht = "2rem";
            return boardDiv;
        }

        function modifyGrid() {
            let numOfSquares = parseInt(numField.value, 10)
            let board = document.getElementById("board");
            let myDivs = [];
            let numOfDivs = numOfSquares * numOfSquares;

            // set grid styles to the board
            board.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
            board.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;

            for (let i = 0; i < numOfDivs; i += 1) {
            myDivs.push(createDiv());
            }
            board.replaceChildren(...myDivs);
        }
    modifyGrid();
    });

});