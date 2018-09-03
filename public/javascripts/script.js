let randomDice = document.getElementById('random-dice');
let boardGameTable = document.getElementById('gol');
let redPlayer = document.createElement("div");
let bluePlayer = document.createElement("div");

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

    //TODO - aici nu cred ca e nevoie sa fie setate pe pozitia unu pentru ca vor fi setate mai in jos cu date din db
    //TODO - sa va asigurati ca in db le setati pe 1 inainte de fiecare joc
    // addPlayerOne(1);
    // addPlayerTwo(1);

    // getting the players positions from the database using ajax
    $.ajax({
        url: '/players_location',
        method: "GET"
    }).done(function (players){
        console.info('done', players);

        let redPlayerPosition = players[0].position;
        let bluePlayerPosition = players[1].position;

        console.info(redPlayerPosition);
        console.info(bluePlayerPosition);

        addPlayerOne(redPlayerPosition);
        addPlayerTwo(bluePlayerPosition);
    });

}
// function that moves the player on the board
function addPlayerOne(id) {
    let position = 1;
    if (redPlayer.parentElement) {
        position = parseInt(redPlayer.parentElement.id) + id;
    }
    document.getElementById(position).appendChild(redPlayer);
    if(position === 60) {
        alert('RED WINS THE GAME!');
        randomDice.disabled = true;
    }
}
function addPlayerTwo(id) {
    let position = 1;
    if (bluePlayer.parentElement) {
        position = parseInt(bluePlayer.parentElement.id) + id;
    }
    document.getElementById(position).appendChild(bluePlayer);
    if(position === 60) {
        alert('BLUE WINS THE GAME!');
        randomDice.disabled = true;
    }
}

function updateDBPlayerPosition(player, playerPosition) {
    $.ajax({
        url: 'http://localhost:3000/players_location/update',
        method: "POST",
        data: {
            player: player,
            playerPosition: playerPosition
        }
    }).done(function (response) {
       if (response.success) {
           console.info(`player ${player} moved to position: ${playerPosition}`);
       }
    });
}

// function randomDice() that rolls the dice and moves the player
let forConditional = false;
randomDice.addEventListener('click', function(id) {
    // randomNumber generator
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    // rollDice function
    function rollDice() {
        console.log(`You rolled ${randomNumber}`);
        let numere = document.getElementById("numere").innerHTML = `<img src="../images/dice_${randomNumber}.jpg" alt="image"></img>`;
        return randomNumber;
    }

    let playerPosition;

    if(!forConditional) {
        playerPosition = rollDice();
        addPlayerOne(playerPosition);
        updateDBPlayerPosition(1, playerPosition);
        alert(`Red rolled ${randomNumber}`);
        forConditional = true;
    } else {
        playerPosition = rollDice();
        addPlayerTwo(playerPosition);
        updateDBPlayerPosition(2, playerPosition);
        alert(`Blue rolled ${randomNumber}`);
        forConditional = false;
    }
});

generateDivs(); // generate divs on page load
initialLoad(); // load players positions from database on page load