
var Obra = function(){

	var $this = this, last_current_slug = "",current_slug = "about", detail_index = -1;

	function constructor(){
		
		
		checkURL();
		$(".obra-nav").addClass("active");
		$("#download-cv").bind("click", downloadCV);
	}

	function downloadCV(){
		webapp.requestJSON({
			url: "?content=cv",
			success: function(_data){
				var link = document.createElement("a");
			    link.download = name;
			    link.href = _data.cv.cv;
			    link.click();
				document.title = "OBRA - about";
			}
		});
		return false;
	}

	function render(){
		$("#obra-navigation a").removeClass("active");
		$("#obra-navigation a[href='/obra/"+current_slug+"']").addClass("active");
		webapp.requestJSON({
			url: "?content=" + current_slug,
			success: append
		});
	}

	function append(_data){
		$("#obra-content").html(TEMPLATES[current_slug](_data));

		document.title = "OBRA - " +current_slug;
		webapp.checkLinks();
		if (webapp.paths.get().length == 4)	{
			checkSecondPath();
		}

		$("#all-viewport").unbind("click").bind("click", function(){
			if(current_slug=="publications"){
				webapp.goto("/obra/publications");
			}
			if(current_slug=="awards"){
				webapp.goto("/obra/awards");
			}

			if(current_slug=="lectures"){
				webapp.goto("/obra/lectures");
			}
		});
	}

	function animateIn(){
	
	} 

	function animateOut(_callback){
		_callback();
	}

	function destroy(){
		$(".obra-nav").removeClass("active");
 
	}

	function scroll(){
		
	}

	function resize(){
	
	}

	function checkURL(){

		if (webapp.paths.get().length == 2){
			current_slug = "about";
		}else{
			
			current_slug = webapp.paths.get()[2];
		}

		
			render();

		
		
		
		last_current_slug = current_slug;
		
	}

	function checkSecondPath(){

		if (current_slug == "publications" || current_slug == "awards" || current_slug == "lectures"){
			$(".item-list").removeClass("active");
			$(".item-list").eq(webapp.paths.get()[3]).addClass("active");
			var $a = $(".item-list").eq(webapp.paths.get()[3]).find("a").not(".external-link");
			$a.attr("href", $a.attr("href-index"))
		}
	}
 

	
	return{
		constructor: constructor,
		title: function (){
			return "OBRA - about";
		},
		checkURL: checkURL,
		in: animateIn,
		out: animateOut,
		destroy: destroy,
		scroll: scroll,
		resize: resize,
		setData : function(data){
			$this.data = data;
		},
		slug: "obra"
	}
}

Obra.template = "obra"

Obra.route = [
	"/obra", 
	"/obra/about", 
	"/obra/publications", 
	"/obra/awards", 
	"/obra/lectures", 
	"/obra/publications/:1", 
	"/obra/awards/:1", 
	"/obra/lectures/:1", 
	"/obra/contact"
];
