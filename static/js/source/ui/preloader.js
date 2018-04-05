
var Preloader = (function(){

	function show(){
		document.title = "OBRA / loading..."
		$("#preloader").show();
		TweenMax.set(".bar-fill", {width:0});
		TweenMax.to(".bar-fill", 2+Math.random(), {width:50 + (Math.random()*50)+"%", ease:Expo.easeOut});
	}

	function hide(){
		TweenMax.to(".bar-fill", 0.3, {width:"100%", ease:Expo.easeOut, onComplete:function(){
			$("#preloader").hide();
		}});
	}
 
	return {
		show: show,
		hide: hide
	}
})();