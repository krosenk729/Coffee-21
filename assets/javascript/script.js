$(document).ready(function(){
	//initialize variables
	var cafgoal = 1, cafbuttons = [1, 1, 1, 1];
	var cafwins = 0, cafloses = 0, cafuserscore = 0;

	//function to initialize a game
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
		/* console.log(cafbuttons); */
	}
	//initialize game on load
	gameSetup();

	//when a button is clicked
	$('.game-control').click(function(){
		//update score
		cafuserscore += cafbuttons[$(this).data("cafbutton") - 1];
		$('#cafuser').html(cafuserscore); 

		//if win, notify and reset
		if(cafuserscore == cafgoal){
			cafwins ++;
			$('#cafwins').html(cafwins);
			gameSetup();
		}
		//if lose, notify and reset
		else if(cafuserscore > cafgoal){
			cafloses ++;
			$('#cafloses').html(cafloses);
			gameSetup();
		}
	}); 

});