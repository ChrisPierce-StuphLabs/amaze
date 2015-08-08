$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
		
		
			// Left arrow key pressed
			case 37:
				$('#fireball').animate({left: "-=40px"}, 'fast');
				$('#mario').animate({left: "-=40px"}, 'fast')
				$('#fireball').addClass("hidden");
				break;
				
			// Right Arrow Pressed
			case 39:
				$('#fireball').animate({left: "+=40px"}, 'fast');
				$('#mario').animate({left: "+=40px"}, 'fast');
				$('#fireball').addClass("hidden");
				break;


			// Enter Pressed
			case 13:
				$("#fireball").addClass("shown");

				//animate it moving forward
				$('#fireball').animate({left: "+=70px"}, 'fast');
				$('#fireball').animate({left: "+=70px"}, 'fast');
				$('#fireball').animate({left: "+=70px"}, 'fast');
				$('#fireball').animate({left: "+=70px"}, 'fast');
				$('#fireball').animate({left: "+=70px"}, 'fast');
				$('#fireball').animate({left: "+=70px"}, 'fast');


				$("#fireball").addClass("hidden");
				
				$('#fireball').animate({left: "-=420px"}, 'fast');
				
						
					
				//$("#fireball").removeClass("shown");
				break;			




			// Space Pressed
			case 32:
				$('#mario').animate({top: "-=60px"}, 'fast');
				$('#mario').animate({top: "-=60px"}, 'fast');
				$('#mario').animate({top: "+=60px"}, 'fast');
				$('#mario').animate({top: "+=60px"}, 'fast');
				break;  
		}
	});


	//First Goombas stuff
	for(i=0; i<131; i++){
	    $('#goomba1').animate({left: "-=15px"}, 'fast')
	}

	//Second Goombas stuff
	for(i=0; i<131; i++){
	    $('#goomba2').animate({left: "-=15px"}, 'fast')
	}

	//Last Goombas stuff
	for(i=0; i<131; i++){
	    $('#goomba3').animate({left: "-=15px"}, 'fast')
	}
	

});
