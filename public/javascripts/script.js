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

    addPlayerOne(1);
    addPlayerTwo(1);

    // getting the players positions from the database using ajax
    $.ajax({
        url: '/players_location',
        method: "GET"
    }).done(function (players){
        console.info('done', players);

        let redPlayerPosition = players[0].position;
        let bluePlayerPosition = players[1].position;

        console.info(redPlayerPosition)
        console.info(bluePlayerPosition)

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

    if(!forConditional) {
        addPlayerOne(rollDice());
        alert(`Red rolled ${randomNumber}`);
        forConditional = true;
    } else {
        addPlayerTwo(rollDice());
        alert(`Blue rolled ${randomNumber}`);
        forConditional = false;
    }
});




// Immediately-invoked function expression
// let fn3 = (function() {
//   let first = true;
//   return function() {
//     first ? fn1() : fn2();
//     first = !first;
//   }
// })();
// function fn1() {
//   addPlayerOne(rollDice());
//   alert(`Player one rolled ${randomNumber}`);
// };
// function fn2() {
//   addPlayerTwo(rollDice());
//   alert(`Player two rolled ${randomNumber}`);
// };

// document.getElementById('random-dice').onclick = playerOneRoll;

// function playerOneRoll() {
//     document.getElementById('random-dice').onclick = playerTwoRoll;
//     addPlayerOne(rollDice());
//     // alert(`Red rolled  !`);
// }

// function playerTwoRoll() {
//     document.getElementById('random-dice').onclick = playerOneRoll;
//     addPlayerTwo(rollDice());
//     // alert(`Blue rolled  !`);
// }


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