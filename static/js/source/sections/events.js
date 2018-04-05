var is_in_events = false;
var Events = (function(){
	
	function init(){
		$("#event-click").unbind("click").bind("click", show);
	}

	function show(){
		is_in_events = true;
		$("body").css({overflow: "hidden"});
		webapp.requestJSON({
			url:"?content=events",
			success:function(_data){ 
				$("body").append(TEMPLATES["events"](_data));
				$("#events").bind("click", hide);
				document.title = "OBRA / events";
			}
		});

		return false;
	}

	function hide(){
		is_in_events = false;
		$("#events").remove();
		$("body").css({overflow: "auto"});
		document.title = "OBRA";
	}

	return {
		init: init
	}
})();