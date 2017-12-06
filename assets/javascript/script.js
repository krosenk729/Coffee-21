$(document).ready(function(){
	// initialize variables
	var cafgoal = 1, cafbuttons = [1, 1, 1, 1];
	var cafwins = 0, cafloses = 0, cafuserscore = 0;

	// function to initialize a game
	function gameSetup(){
		//Set goal between 19 and 120
		cafgoal = Math.floor((Math.random() * 120) + 19); 
		//Set button values between 1 and 12
		for(var i = 0; i < 4; i++){
			cafbuttons[i] = Math.floor((Math.random() * 12) + 1);
		} 

		cafuserscore = 0;
		$('#cafuser').html(cafuserscore);
		$('#cafgoal').html(cafgoal);

	}
	// initialize game on load
	gameSetup();

	// function to react when a button is clicked
	$('.game-control').click(function(){

		// update score based on assigned data attribute 
		// -1 because index of buttons starts at 1 
		cafuserscore += cafbuttons[$(this).data("cafbutton") - 1];
		$('#cafuser').html(cafuserscore);
		$('#cafuser').animate({fontSize: '1.5em'}, {duration: 100}).animate({fontSize: '1em'}, {duration: 50});

		// if win, notify and reset
		if(cafuserscore == cafgoal){
			cafwins ++;
			$('.modal h1').html('Winner, Winner. Coffee Dinner');
			$('#cafwins').html(cafwins);
			$('.modal').toggleClass('modal-shown');
			gameSetup();
		}
		//if lose, notify and reset
		else if(cafuserscore > cafgoal){
			cafloses ++;
			$('.modal h1').html('Cry Over Spilled Coffee');
			$('#cafloses').html(cafloses);
			$('.modal').toggleClass('modal-shown');
			gameSetup();
		}
	});

});