console.log("gopal sharm ji  you are a good men ");



function startGame() {
    document.turn = "X";
    if (Math.random() < 0.5) {
        document.turn = "O";

    }
    document.winner = null;
    setMassage(document.turn + " gets to start!!");

    document.getElementById("s1").style.color = "#3FC80E ";
    document.getElementById("s2").style.color = "#3FC80E ";
    document.getElementById("s3").style.color = "#3FC80E ";
    document.getElementById("s4").style.color = "#3FC80E ";
    document.getElementById("s5").style.color = "#3FC80E ";
    document.getElementById("s6").style.color = "#3FC80E ";
    document.getElementById("s7").style.color = "#3FC80E ";
    document.getElementById("s8").style.color = "#3FC80E ";
    document.getElementById("s9").style.color = "#3FC80E ";
    // console.log("gopal");
}
function setMassage(msg) {
    document.querySelector("#massage").textContent = msg;


}

function nextMove(square) {
    if (document.winner != null) {
        setMassage(document.turn + " allready a winner")
    }
    else if (square.textContent == "") {
        square.textContent = document.turn;
        switchTurn();

    }
    else {
        setMassage("that is allredy used")
    }

}

function switchTurn() {
    if (checkForWinner(document.turn)) {
        setMassage("consgress " + document.turn + "  !you win.....")
        document.winner = document.turn;

    }

    else if (checkForTie()) {

        setMassage("its a tie");

    }
    else if (document.turn == "X") {
        document.turn = "O";
        setMassage("its " + document.turn + " 's turn....");

    }
    else {
        document.turn = "X";
        setMassage("its " + document.turn + " 's turn")
    }

}

function checkForWinner(move) {

    let result = false;
    if (checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;

}
function checkRow(a, b, c, move) {
    let result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).textContent;


}

function checkForTie() {


    for (let i = 1; i < 10; i++) {
        if (getBox(i) == "")
            return false;
    }
    return true;

}







