var generatePlayer = document.getElementById('generate-player');
var userName = '';


generatePlayer.addEventListener('click', function() {
	userName = prompt('What is your name?');
	if(userName !== '') {
		alert(`Hello ${userName}, are you ready to play?`);	
	} else {
		prompt('What is your name?');
	}
});
function RandomDice() {

    var random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    document.getElementById("numere").innerHTML = "<img src='"
        + `./assets/imgs/dice_${random}.jpg` + "' alt='image'></img>";
    return random;
}


