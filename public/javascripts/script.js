var generatePlayer = document.getElementById('generate-player');
var startGame = document.getElementById('start-game');
var randomDice = document.getElementById('random-dice');
var userName = '';
var rollPlayerOne = document.getElementById('roll-player-one');
var rollPlayerTwo = document.getElementById('roll-player-two');
var soldat = document.getElementById('gol');
var player1 = document.createElement("div");
var player2 = document.createElement("div");


player1.id="player-unu";
player2.id="player-doi";


/* Function that does the mapping for us */
function generateDivs() {
    divs = "";
    for(var i = 1; i <= 60; i++) {
        //TODO -
        // rowNumber
        // divs+= '<div class="square row-' + rowNumber + '">' +
        divs += '<div class="square">' + "<div class='numberCircle' id=" + i + ">" + i + "</div></div>";
    }
    rollPlayerOne.style.display = 'inline-block';
    rollPlayerTwo.style.display = 'inline-block';
    // randomDice.style.display = 'inline-block'
    soldat.innerHTML = divs;
    randomDice.style.display = 'inline-block';
}

// Load players info from database
function initialLoad() {

    addPlayerOne(1);
    addPlayerTwo(1);

    $.ajax({
        url: '/players_location',
        method: "GET"
    }).done(function (players){
        console.info('done', players);

        var player1Position = players[0].position;
        var player2Position = players[1].position;

        console.info(player1Position)
        console.info(player2Position)

        addPlayerOne(player1Position);
        addPlayerTwo(player2Position);
    });

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
    var numere = document.getElementById("numere").innerHTML = `<img src="./images/dice_${random}.jpg" alt="image"></img>`;
    return random;

}
// function randomDice() that roll the dice and moves the player
randomDice.addEventListener('click', function() {
    addPlayerOne(rollDice());
});
// randomDice.addEventListener('click', function() {
//     addPlayerTwo(rollDice())
// });



// updating the players position to the database
// function updatePlayersPosition() {
//     $.ajax({
//         url: 'http://localhost:3000/players_location',
//         method: "POST"
//     }).done(function (response) {
//        if (response.success) {
//
//        }
//     });
// }

generateDivs(); // generate divs on page load

initialLoad(); // load players positions from database on page load