$(document).on('ready', function() {
	console.log('This must be working')

	$(".modal-transparent").on('show.bs.modal', function () {
  		setTimeout( function() {
    		$(".modal-backdrop").addClass("modal-backdrop-transparent");
  		}, 0);
	});

	$(".modal-transparent").on('hidden.bs.modal', function () {
	  	$(".modal-backdrop").addClass("modal-backdrop-transparent");
	});

	$(".modal-fullscreen").on('show.bs.modal', function () {
  		setTimeout( function() {
    		$(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  		}, 0);
	});

	$(".modal-fullscreen").on('hidden.bs.modal', function () {
  		$(".modal-backdrop").addClass("modal-backdrop-fullscreen");	
	});

	// $( '#button-enter').click(function(e){
	// 	console.log('TESTING')
	// 	e.preventDefault;
	// 	$( '#msform' ).fadeIn( "slow");
	// });


	//jQuery time
	var current_fs, next_fs, previous_fs; //fieldsets
	var top, opacity, scale; //fieldset properties which we will animate
	var animating; //flag to prevent quick multi-click glitches

	$(".next").click(function(){
		if(animating) return false;
		animating = true;
		
		current_fs = $(this).parent();
		next_fs = $(this).parent().next();
		
		//show the next fieldset
		next_fs.show(); 
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale current_fs down to 80%
				scale = 1 - (1 - now) * 0.2;
				//2. bring next_fs from the right(50%)
				top = (now * 50)+"%";
				//3. increase opacity of next_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'transform': 'scale('+scale+')'});
				next_fs.css({'top': top, 'opacity': opacity});
			}, 
			duration: 800, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
		});
	});

	$(".previous").click(function(){
		if(animating) return false;
		animating = true;
		
		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();
		
		//show the previous fieldset
		previous_fs.show(); 
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale previous_fs from 80% to 100%
				scale = 0.8 + (1 - now) * 0.2;
				//2. take current_fs to the right(50%) - from 0%
				top = ((1-now) * 50)+"%";
				//3. increase opacity of previous_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'top': top});
				previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
			}, 
			duration: 800, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
		});
	});

	$(".submit").click(function(){
		return false;
	});

	$(document).keypress(function(e) {
	    if(e.which == 13) {
	    	e.preventDefault
	    }
  	});
	

});
