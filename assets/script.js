var generatePlayer = document.getElementById('generate-player');
var startGame = document.getElementById('start-game');
var randomDice = document.getElementById('random-dice');
var userName = '';

// generatePlayer.addEventListener('click', function() {
//  userName = prompt('What is your name?');
//  if(userName !== '') {
//      alert(`Hello ${userName}, are you ready to play?`); 
//  } else {
//      prompt('What is your name?');
//  }
// });
randomDice.style.display = 'none'

/* function that rolls the dice */
function RandomDice() {
    var random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    var numere = document.getElementById("numere").innerHTML = 
        "<img src='" + `./assets/imgs/dice_${random}.jpg` + "' alt='image'></img>";
    return random;
}
randomDice.addEventListener('click', function() {
    RandomDice();
});

/* Function that does the mapping for us */
function generateDivs() {
    divs = "";
    for(var i = 1; i <= 40; i++) {
        divs+= "<div class='row'>" +
            "<div class='square'>" +
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