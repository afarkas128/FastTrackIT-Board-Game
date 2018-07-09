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
    var Dices = new Array();
    Dices[0] = "./assets/imgs/dice_1.jpg";
    Dices[1] = "./assets/imgs/dice_2.jpg";
    Dices[2] = "./assets/imgs/dice_3.jpg";
    Dices[3] = "./assets/imgs/dice_4.jpg";
    Dices[4] = "./assets/imgs/dice_5.jpg";
    Dices[5] = "./assets/imgs/dice_6.jpg";
    var random = Math.floor(Math.random() * Dices.length);
    document.getElementById("numere").innerHTML = "<img src='"
        + Dices[random] + "' alt='image'></img>";
}