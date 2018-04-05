
var Slider = function(_$el){

	var $el = _$el, images_list, current = 0, $wrapper, direction = 0, interval, lastMouseXPos=0, lastMouseYPos=0;

	function create(){
		
		images_list = $.parseJSON($el.html());
		
		$el.html("<div id='slider-component'></div>");
		$wrapper = $el.find("#slider-component");
		
		render();


	}

	function clickSlider(e){
		setTimeout(function(){
			if (!is_in_events){
				if(e.target.tagName.toLowerCase()!="nav" && e.target.tagName.toLowerCase()!="a"){
					
					if (e.pageY > $el.find(".slide").offset().top && e.pageY < ($el.find(".slide").offset().top + $el.find(".slide").height() )) {
						if (webapp.isSmartphone()){
							next();
							
						}else{
							
							if (direction == -1){
								prev();
							}
						
							if (direction == 1){
								next();
							}
						}
					}else{
						webapp.goto("/");
					}
					
				}
			}
		},10);
		
	}

	function openImageNewWindow(){
		var link = document.createElement("a");
	    var image_source = webapp.paths.config.images+images_list[current].image.file;
	    $("body").append("<div id='zoom-gallery'><img src='" + image_source + "'/></div>")
	    /*$("#zoom-gallery").bind("click", function(){
	    	$("#zoom-gallery").remove();
	    })*/
	}

	function next(){
		console.log(">"+current);
		current++;
		console.log(">>"+current);
		if (current==images_list.length) current = 0;
		console.log(">>>"+current);
		render();
	}

	function prev(){
		current--;
		if (current<0) current = images_list.length-1;
		render();
	}

	function render(){
		let _this = this;
		$(".fullscreen-slide").remove();

		$("#next-arrow,#back-arrow").hide();
		
		if (images_list[current].fullscreen == "1" && !webapp.isSmartphone()){
			$wrapper.addClass("fullscreen");
			$("main").css({pointerEvents: "none"});
			$("#projects article a").css({pointerEvents: "visible"});
			$wrapper.html("<div class='slide' style='background-image:url();pointer-events:none'></div>");
			$("body").append("<div class='fullscreen-slide' style='background-image:url(" + webapp.paths.config.images + images_list[current].image.file + ");'></div>");
			$(document).unbind("click").bind("click", clickSlider);
		}else{
			
			$("main").css({pointerEvents: "initial"});
			$wrapper.removeClass("fullscreen");
			
			
			
			$wrapper.html("<div class='slide' style='background-image:url(" + webapp.paths.config.images + images_list[current].image.file + ");'></div>");
			$(document).unbind("click").bind("click", clickSlider);
		}

		$("html,body").css({cursor:"none"});

		checkCropConfig();

		

		if (!webapp.isSmartphone()){

			$(document).unbind("mousemove").bind("mousemove", mousemove);
			TweenMax.to("#next-arrow,#back-arrow",0,{opacity:0});
			

			function mousemove(e){

				if (!is_in_events){

					TweenMax.killTweensOf("#next-arrow,#back-arrow");
					TweenMax.set("#next-arrow,#back-arrow",{opacity:1});
					TweenMax.to("#next-arrow,#back-arrow",0,{opacity:0, delay: 2});

					lastMouseXPos = e.pageX;
					lastMouseYPos = e.pageY;
					
					if (e.pageY < $el.find(".slide").offset().top || e.pageY > ($el.find(".slide").offset().top + $el.find(".slide").height() )) {
						$("#next-arrow,#back-arrow").hide();
						$("html,body").css({cursor: "default"});
					}else{
						if(e.target.tagName.toLowerCase()=="nav" || e.target.tagName.toLowerCase()=="a"){
							$("#next-arrow,#back-arrow").hide();
							$("html,body").css({cursor: "default"});
						}else{
							if(e.clientX>($el.offset().left + $el.find("#slider-component").width()/2)){
								direction = 1;
								$("#next-arrow").show();
								$("#next-arrow").css({
									top: e.clientY,
									left: e.clientX+25,
								});
								$("#back-arrow").hide();
								$("html,body").css({cursor: "none"});
							}else{
								
								$("#next-arrow").hide();
							}

							if(e.clientX<($el.offset().left + $el.find("#slider-component").width()/2)) {
								direction = -1;
								$("#back-arrow").show();
								$("#back-arrow").css({
									top: e.clientY,
									left: e.clientX-25,
								});
								$("#next-arrow").hide();
								$("html,body").css({cursor: "none"});
							}else{
								$("#back-arrow").hide();
								
							}
						}

						if(e.clientX+$el.offset().left >($el.find("#slider-component").width()/2)  && e.clientX+$el.offset().left  <($el.find("#slider-component").width()/2) ){
							$("#slider-component .slide,.fullscreen-slide").css({cursor: "pointer"});
							direction = 0;
						}
					}

				

				}

				
				
				
			}
		}

		resize();
	}

	function checkCropConfig(){
		if (images_list[current].fullscreen == "0"){
			
			if (images_list[current].crop_data && images_list[current].crop_data !=""){
				
				var crop_data = $.parseJSON(images_list[current].crop_data),
					FINAL_WIDTH = ($("#slider-component .slide").width() * images_list[current].image.width ) / crop_data.width,
					FINAL_HEIGHT = ($("#slider-component .slide").height() * images_list[current].image.height ) / crop_data.height,
					pos_x = (FINAL_WIDTH/images_list[current].image.width ) * crop_data.x,
					pos_y = (FINAL_HEIGHT / images_list[current].image.height) * crop_data.y
				
				
				
				
				$("#slider-component .slide").css({
					backgroundSize: (FINAL_WIDTH)+"px",
					backgroundPosition: (0-(pos_x))+"px "+(0-(pos_y))+"px" 
				});
			}

		}
	}

	function resize(){
		$wrapper.css({
			height: $wrapper.width() * 460 / 740
		}); 

		var top = $("article.active").offset().top - 64,
			height = $(".fullscreen-slide").width() * 754 / 1320; 
			
		if ($("article.active").offset().top + height < $("article.active").find(".title").height() + $("article.active").offset().top + $("#slider-component").height() + (55*2)){
			top = $("article.active").find(".title").height() + $("article.active").offset().top + $("#slider-component").height() + (55) - height;
		}

		$(".fullscreen-slide").css({
			top: top,
			height: height
		});

		checkCropConfig();
	}

	function destroy(){
		$("html,body").css({cursor:"initial"});
		$(document).unbind("mousemove mouseleave click");
		$(".fullscreen-slide").remove();
		$("#next-arrow,#back-arrow").hide();
		clearInterval(interval);
	}

	return {
		create: create,
		resize: resize,
		destroy: destroy
	}
}

Slider.attribute = "slider";