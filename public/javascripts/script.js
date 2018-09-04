let randomDice = document.getElementById('random-dice');
let boardGameTable = document.getElementById('gol');
let redPlayer = document.createElement("div");
let bluePlayer = document.createElement("div");
// let resetGame = document.getElementById('reset-game');

let redPlayerLastPosition;
let bluePlayerLastPosition;

redPlayer.id="player-unu";
bluePlayer.id="player-doi";

/* Function that does the mapping for us */
function generateDivs() {
    divs = "";
    for(let i = 1; i <= 60; i++) {
        //TODO -
        // rowNumber
        // divs+= '<div class="square row-' + rowNumber + '">' +
        divs += '<div class="square">' + "<div class='numberCircle' id=" + i + ">" + i + "</div></div>";
    }
    boardGameTable.innerHTML = divs;
}

// Load players positions from database
function initialLoad() {
    // getting the players positions from the database using ajax
    $.ajax({
        url: 'http://localhost:3000/players_location',
        method: "GET"
    }).done(function (players){
        console.info('done', players);

        redPlayerLastPosition = players[0].position;
        bluePlayerLastPosition = players[1].position;

        console.info(`Player Red (1) db position is ${redPlayerLastPosition}`);
        console.info(`Player Blue (2) db position is ${bluePlayerLastPosition}`);

        addPlayerOne(redPlayerLastPosition);
        addPlayerTwo(bluePlayerLastPosition);
    });
}
// function that moves the player on the board
function addPlayerOne(position) {
    document.getElementById(position).appendChild(redPlayer);
}
function addPlayerTwo(position) {
    document.getElementById(position).appendChild(bluePlayer);
}

function updateDBPlayerPosition(player, position) {
    $.ajax({
        url: 'http://localhost:3000/players_location/update',
        method: "POST",
        data: {
            player: player,
            position: position
        }
    }).done(function (response) {
       if (response.success) {
           console.info(`Player ${player} moved to position: ${position}`);
           console.log('----------------------------------');
       }
    });
}

function resetDBPlayerPosition(player) {
    $.ajax({
        url: 'http://localhost:3000/players_location/update',
        method: "POST",
        data: {
            player: player,
            position: 1
        }
    }).done(function (response) {
       if (response.success) {
           // console.info(`Player ${player} position has been reset to ${position} in DB.`);
           console.log('----------------------------------');
       }
    });
}

// player position update on click
let forConditional = false;
randomDice.addEventListener('click', function(id) {
    // randomNumber generator
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    // rollDice function
    function rollDice(whichPlayer) {
        console.log(whichPlayer + ` rolled ${randomNumber}`);
        let numere = document.getElementById("numere").innerHTML = `<img src="../images/dice_${randomNumber}.jpg" alt="image"></img>`;
        return randomNumber;
    }
    if(!forConditional) {
        let redplayerNewPosition = redPlayerLastPosition + rollDice('Red');
        console.info('Player 1 (red) moves from position ' + redPlayerLastPosition + ' to ' + redplayerNewPosition);
        redPlayerLastPosition = redplayerNewPosition;
        alert(`Red rolled ${randomNumber}`);
    
        if (redplayerNewPosition >= 60) {
            alert('RED WINS THE GAME!!!!!!!!!!!!');
            redplayerNewPosition = 1;
            // if one of the players won the game, reset both player's position to 1 
            updateDBPlayerPosition(1, 1);
            updateDBPlayerPosition(2, 1);
            addPlayerOne(1);
            addPlayerTwo(1);
        } else {
            updateDBPlayerPosition(1, redplayerNewPosition);
            addPlayerOne(redplayerNewPosition);
        }
        forConditional = true;
    } else {
        let blueplayerNewPosition = bluePlayerLastPosition + rollDice('Blue');
        console.info('Player 2 (blue) moves from position ' + bluePlayerLastPosition + ' to ' + blueplayerNewPosition);
        bluePlayerLastPosition = blueplayerNewPosition;
        alert(`Blue rolled ${randomNumber}`);
        if (blueplayerNewPosition >= 60) {
            alert('BLUE WINS THE GAME!!!!!!!!!!!!');
            blueplayerNewPosition = 1;
            // if one of the players won the game, reset both player's position to 1 
            updateDBPlayerPosition(1, 1);
            updateDBPlayerPosition(2, 1);
            addPlayerOne(1);
            addPlayerTwo(1);
        } else {
            updateDBPlayerPosition(2, blueplayerNewPosition);
            addPlayerTwo(blueplayerNewPosition);
        }
        forConditional = false;
    }
});

generateDivs(); // generate divs on page load
initialLoad(); // load players positions from database on page load