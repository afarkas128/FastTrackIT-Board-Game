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