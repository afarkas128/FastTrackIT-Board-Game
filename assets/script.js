var generatePlayer = document.getElementById('generate-player');
var generateMap = document.getElementById('generate-map');
var userName = '';

generatePlayer.addEventListener('click', function() {
	userName = prompt('What is your name?');
	if(userName !== '') {
		alert(`Hello ${userName}, are you ready to play?`);	
	} else {
		prompt('What is your name?');
	}
});

/* function that rolls the dice */
function RandomDice() {

    var random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    var numere = document.getElementById("numere").innerHTML = 
        "<img src='" + `./assets/imgs/dice_${random}.jpg` + "' alt='image'></img>";
    return random;
}

/* Function that does the mapping for us */
function generateDivs() {
    divs = "";
    // var i;
    for(var i = 1; i <= 30; i++) {
        divs+= "<div class='row'>" +
            "<div class='square'>" +
            "<div class='numberCircle' id="+ i +">"+ i +"</div></div></div>";
    }
    document.getElementById("gol").innerHTML = divs;
}

/* Calling our map generator function on click */
generateMap.addEventListener('click', function() {
    generateDivs();
});

