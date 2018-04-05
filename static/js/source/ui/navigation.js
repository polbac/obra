
var Navigation = function(){
	
	

	function constructor(){
		
		$("body").append(TEMPLATES["navigation"]);
		Events.init();
		resize(); 
	}

	function resize(){
		
			var main_width = 800;

			if ($("main").position().left + 800 > $(window).width() - 64){
				main_width = $(window).width() - ($("main").position().left) - 64;
			}

			

			$("main").css({
				width: main_width
			});
		
	}

	return {
		constructor: constructor,
		resize: resize
	}
}