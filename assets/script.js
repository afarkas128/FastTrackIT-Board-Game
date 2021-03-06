var generatePlayer = document.getElementById('generate-player');
var startGame = document.getElementById('start-game');
var randomDice = document.getElementById('random-dice');
var userName = '';
var rollPlayerOne = document.getElementById('roll-player-one')
var rollPlayerTwo = document.getElementById('roll-player-two')
var soldat = document.getElementById('gol');
var player1 = document.createElement("div");
var player2 = document.createElement("div");
var showPlayerOne = document.getElementById('roll-player-one');
var showPlayerTwo = document.getElementById('roll-player-two');

player1.id="player-unu";
player2.id="player-doi";

/* hide the roll dice button */
randomDice.style.display = 'none';

/* Function that does the mapping for us */
function generateDivs() {
    divs = "";
    for(var i = 1; i <= 70; i++) {
        //TODO -
        // rowNumber
        // divs+= '<div class="square row-' + rowNumber + '">' +
        divs += '<div class="square">' + "<div class='numberCircle' id=" + i + ">" + i + "</div></div>";
    }
    soldat.innerHTML = divs;
}

function addPlayerOne(id) {
    var position = 1;
    if (player1.parentElement) {
        position = parseInt(player1.parentElement.id) + id;
    }
    document.getElementById(position).appendChild(player1);
}
function addPlayerTwo(id) {
    var position = 1;
    if (player2.parentElement) {
        position = parseInt(player2.parentElement.id) + id;
    }
    document.getElementById(position).appendChild(player2);
}

function removePlayer1(id){
    var playerUnu= document.getElementById("player-unu");
    playerUnu.remove();
}
function removePlayer2(id){
    var playerDoi= document.getElementById("player-doi");
    playerDoi.remove();
}

/* function that rolls the dice */
function rollDice() {
    var random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    var numere = document.getElementById("numere").innerHTML = "<img src='" + `./assets/imgs/dice_${random}.jpg` + "' alt='image'></img>";
    return random;
}

randomDice.addEventListener('click', function() {
    addPlayerOne(rollDice())
});

/* Calling our map generator function on click */
startGame.addEventListener('click', function() {
    startGame.style.display = 'none';
    generateDivs();
    randomDice.style.display = 'inline-block'
    var hiddenTitle = document.getElementById('start-game-title').style.display = 'none';
    showPlayerOne.style.display = 'inline-block';
    showPlayerTwo.style.display = 'inline-block';
});

rollPlayerOne.addEventListener('click', function() {
    addPlayerOne(1);
});
rollPlayerTwo.addEventListener('click', function() {
    addPlayerTwo(1);
})