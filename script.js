$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
		
		
			// Left arrow key pressed
			case 37:
				$('#mario').animate({left: "-=40px"}, 'fast');
				break;
				
			// Right Arrow Pressed
			case 39:
				$('#mario').animate({left: "+=40px"}, 'fast');
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
});
