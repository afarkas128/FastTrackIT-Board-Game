var generatePlayer = document.getElementById('generate-player');
var startGame = document.getElementById('start-game');
var randomDice = document.getElementById('random-dice');
var userName = '';
var rollPlayerOne = document.getElementById('roll-player-one')
var rollPlayerTwo = document.getElementById('roll-player-two')
var soldat = document.getElementById('gol');

var Player1 = document.createElement("div");
Player1.id="PlayerA";

var Player2 = document.createElement("div");
Player2.id="PlayerB";


function addPlayerOne(id) {
    var position = 1;
    if (Player1.parentElement) {
        position = parseInt(Player1.parentElement.id) + id;
    }
    document.getElementById(position).appendChild(Player1);

}
function addPlayerTwo(id) {
    document.getElementById(id).appendChild(Player2);
}

function RemovePlayer1(id){
    var Player= document.getElementById("PlayerA");
    Player.remove()
}
function RemovePlayer2(id){
    var Player= document.getElementById("PlayerB");
    Player.remove()
}

randomDice.style.display = 'none'

/* function that rolls the dice */
function rollDice() {
    var random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    var numere = document.getElementById("numere").innerHTML = 
        "<img src='" + `./assets/imgs/dice_${random}.jpg` + "' alt='image'></img>";
    return random;
}
randomDice.addEventListener('click', function() {
    addPlayerOne(rollDice())
});

/* Function that does the mapping for us */
function generateDivs() {
    divs = "";
    for(var i = 1; i <= 40; i++) {
        //TODO -
        // rowNumber
        // divs+= '<div class="square row-' + rowNumber + '">' +
        divs+= '<div class="square">' +
            "<div class='numberCircle' id="+ i +">"+ i +"</div></div></div>";
    }
    document.getElementById("gol").innerHTML = divs;
}

/* Calling our map generator function on click */
startGame.addEventListener('click', function() {
    startGame.style.display = 'none';
    generateDivs();
    randomDice.style.display = 'inline-block'
    var hiddenTitle = document.getElementById('start-game-title').style.display = 'none';
});

rollPlayerOne.addEventListener('click', function() {
    addPlayerOne(1);
});
rollPlayerTwo.addEventListener('click', function() {
    addPlayerTwo(1);
})