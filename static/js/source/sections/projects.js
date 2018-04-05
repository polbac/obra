
var Projects = function(){

	var $this = this, 
		is_in_detail = false;


	function prerender(data){
		for(var i=0;i<data.projects.length;i++){
			data.projects[i].post_title = data.projects[i].post_title.replace("<p>", "").replace("</p>", "");
		}

		data.projects.sort(function(a, b){
		    if(a.post_title < b.post_title) return -1;
		    if(a.post_title > b.post_title) return 1;
		    return 0;
		});

		return data;
	}

	function sortByKey(array, key) {
	    return array.sort(function(a, b) {
	        var x = a[key]; var y = b[key];
	        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	    });
	}

	function constructor(){
		
		/*var letters = [];
		
		for (var i=0;i<$this.data.projects.length;i++){
			letters[$this.data.projects[i].post_title.replace(/<(?:.|\n)*?>/gm, '')[0]] = 1;
		}

		for (var o in letters){
			$("#abc").append("<span class='letter'>" + o + "</span><span class='separator'> - </span>")
		}*/

		checkURL();

		$(".az").hide();

		$("#abc .letter").bind("click", gotoLetter);

		$("#all-viewport").unbind("click").bind("click", function(){
			webapp.goto("/");
		});
		$("#all-viewport").remove();
	}

	function gotoLetter(){
		var letter = $(this).text();
		var $first_item = undefined;
		$("#projects article").each(function(){
			if ($(this).find(".title a").text().replace(/<(?:.|\n)*?>/gm, '')[0] == letter && $first_item==undefined){
				$first_item = $(this);
			}
		}); 

		$(document).scrollTop($first_item.offset().top-126-30);
	}
	

	function animateIn(){
	
	} 

	function animateOut(_callback){
		_callback();
	}

	function destroy(){
		$("main").css({pointerEvents: "initial"});
		$(".fullscreen-slide").remove();
 		$(".az").css({
 			display: "inline-block"
 		});
	}

	function scroll(){
		if ($(document).scrollTop()>1){
			$("#abc").show();
		}else{
			$("#abc").hide();
		}

		if (is_in_detail) $("#abc").hide();
	}

	function resize(){
	
	}

	function checkURL(){
		
		if (webapp.paths.get().length == 4){
			
			if (is_in_detail){
				closeDetail(showDetail);
			}else{
				showDetail();	
			}
			
		}else{
			if (is_in_detail){
				closeDetail();
			}
		}
	}

	function closeDetail(_callback){
		
		is_in_detail = false;

		var project_id = webapp.paths.get()[2];
		var $article = $("article.active");
		var $a = $article.find("a");
		
		$a.attr("href-index", $a.attr("href"));
		$a.attr("href", $a.attr("href-original"));

		$("article.active .detail").hide();
		$("article.active").removeClass("active");
		$("article.active .detail").remove();

		webapp.checkComponentsRemoved();
		document.title = "OBRA - projects";
		if (_callback) _callback();

		
		scroll()
		
	}
	
	function showDetail(){
		is_in_detail = true;
		var project_id = webapp.paths.get()[2];
		var $article = $("article[data-id='"+project_id+"']");
		$article.addClass("active");
		
		var $a = $article.find("a");
		$a.attr("href-original", $a.attr("href"));
		$a.attr("href", $a.attr("href-index"));
		
		if (!webapp.isSmartphone()){
			//TweenMax.to("html,body",.5,{ scrollTop:$article.offset().top - 104, ease:Expo.easeOut});
		}else{
			//TweenMax.to("html,body",.5,{ scrollTop:$article.offset().top-80, ease:Expo.easeOut});
		}

		webapp.requestJSON({
			url:"?content=project-detail&id=" + project_id,
			success:function(_data){
				
				document.title = "OBRA - " + _data.detail.post_title.replace(/<(?:.|\n)*?>/gm, '');
				$article.append(TEMPLATES["project-detail"](_data));
				webapp.checkComponents();
				scroll();
				if (!webapp.isSmartphone()){
				//TweenMax.to("html,body",.5,{ scrollTop:$article.offset().top - 104, ease:Expo.easeOut});
				}else{
					//TweenMax.to("html,body",.5,{ scrollTop:$article.offset().top-80, ease:Expo.easeOut});
				}
				
			}
		})
	}

	function hideDetail(){

	}
	
	return{
		prerender: prerender,
		constructor: constructor,
		title: function (){
			return "OBRA - projects";
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
		slug: "projects"
	}
}

Projects.template = "projects"
Projects.endpoint = function(){
	return "?content=projects";
};
Projects.route = ["/", "/projects/:1/:2"];
