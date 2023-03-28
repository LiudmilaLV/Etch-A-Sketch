document.addEventListener("DOMContentLoaded", () => {
    function createDiv() {
        let boardDiv = document.createElement("div");
        boardDiv.className = "new-div";
        boardDiv.innerText = "I am a new DIV";
        return boardDiv;
    }

    function createAndModifyDivs() {
        let board = document.getElementById("board");
        let myDivs = [];
        let numOfDivs = 9;

        for (let i = 0; i < numOfDivs; i += 1) {
        myDivs.push(createDiv());
        board.appendChild(myDivs[i]);
        }
    // set grid styles to the board
    }

    createAndModifyDivs();
});