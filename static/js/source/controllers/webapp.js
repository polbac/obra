
webapp = (function(){



	var $el,
		router = new Router(),
		paths = new Paths(),
		url = new URL(),
		components = new Components(), 
		pages = [],
		ui = [],
		ui_created = [],
		preloader,
		page_controller,
		cache_json = [],
		cache_templates= [],
		next_page_controller,
		current_data,
		config = {},
		is_smartphone = false;

	/** reveal **/

	function addComponents(_components){
		for (var i = 0; i < components.length; i++) {
			ui.push(components[i]);
		}
	}

	function addUIComponents(_ui){
		for (var i = 0; i < _ui.length; i++) {
			ui.push(_ui[i]);
		}
	}

	function addPreloader(_preloader){
		preloader = _preloader;
	}

	function render(){



		Handlebars.registerPartial('image_base', paths.config.images)

		for (var i = 0; i < ui.length; i++) {
			var u = new ui[i]()
			ui_created.push(u);
			if (u.constructor) u.constructor();
			if (u.in) u.in();
			bindLinks();
		}

		for (i = 0; i < pages.length; i++) {
			
			for (var j = 0; j < pages[i].route.length; j++) {
				
				(function(p){
					router.route(p.route[j], function(){
						gotoSection(p);
					});
				})(pages[i])
				
			}
		}
		router.start()
		
		$(window).bind("resize", resize);
		$(window).bind("scroll", scroll);
	}

	function scroll(){
		if (page_controller.scroll) page_controller.scroll();
		components.scroll();
	}

	function resize(){
		if (page_controller.resize) page_controller.resize();
		if (config.smartphone_width){
			if ($(window).width()<=config.smartphone_width){
				is_smartphone = true;
			}else{
				is_smartphone = false;
			}
		}

		for (var i = 0; i < ui_created.length; i++) {
			if (ui_created[i].resize) ui_created[i].resize();
		}
		components.resize();
	}

	function addSections(_sections, _$el){
		for (var i = 0; i < _sections.length; i++) {
			pages.push(_sections[i]); 
		}
		$el = $(_$el);
	}

	function gotoSection(section_controller){

		next_page_controller = section_controller;
		
		if (page_controller){

			
			if (page_controller.slug != new section_controller().slug){
				
				if (page_controller.out){

					page_controller.out(createNextSection);
				}else{
					createNextSection();
				}
			}else{
				

				if (page_controller.checkURL) page_controller.checkURL();
			}
		}else{

			createNextSection();
		}
		

	}

	function createNextSection(){

		if (page_controller){
			if (page_controller.destroy) page_controller.destroy();
			page_controller = null;
			components.checkRemoved();
		}
		
		$("body").attr("class", "");
		page_controller = new next_page_controller();
		$("body").attr("class", next_page_controller.template);
		
		

		

		if (next_page_controller.endpoint){
			var u = typeof next_page_controller.endpoint === "function" ? next_page_controller.endpoint() : next_page_controller.endpoint;
			
			if (cache_templates[u]){
				renderSection();

			}else{

				if (preloader) preloader.show();
				$.ajax({
					type: "get",
					url: paths.config.api + u,
					success: function(_data){
						
						current_data = _data;
						if (page_controller.prerender) current_data = page_controller.prerender(current_data);
						
						cache_templates[u] = TEMPLATES[next_page_controller.template](current_data);
						renderSection()
					}
				}); 
			}
		}else{
			if (cache_templates[u]){
				renderSection();
			}else{
				cache_templates[u] = TEMPLATES[next_page_controller.template]();
				renderSection()
			}
		}

	}

	function renderSection(){  
		$(document).scrollTop(0);

		var u = typeof next_page_controller.endpoint === "function" ? next_page_controller.endpoint() : next_page_controller.endpoint;
		
		$el.html(cache_templates[u]);
		if (page_controller.setData) page_controller.setData(current_data);

		if (page_controller.constructor) page_controller.constructor();
		if (page_controller.in) page_controller.in();
		bindLinks();
		
		var t = typeof page_controller.title === "function" ? page_controller.title() : page_controller.title;
		document.title = t;
		
		if (page_controller.resize) page_controller.resize();
		components.checkNew();
		components.scroll();
		asynx.update();

		if (preloader) preloader.hide();

	}

	function bindLinks(){
		$("a").not("[target='_blank']").not(".external").unbind("click").bind("click", clickLink);
	}

	function clickLink(){
		goto($(this).attr("href"));

		return false;
	}

	function goto(url){
		router.navigate(url, true, false);
	}

	/** controllers **/

	function Paths(){
		
		var config;

		function getPaths(){
			return document.location.pathname.split("/");
		} 

		return {
			config: config, 
			get: getPaths
		}
	}

	function URL(){
		return {
			getPaths : function(){
				return document.location.pathname.split("/");
			}
		}
	}

	function Components(){
		
		var c = [], els_created=[];

		function addComponents(components){
			c = components;
		}

		function checkNew(){
			for (var i = 0; i < c.length; i++) {

				
				var $els = $("*[" + c[i].attribute+"]").not(".component-created");
				$els.each(function(){
					
					var _guid = guid();
					$(this).addClass("component-created");
					$(this).addClass("component-created-" + _guid);
					var ob = new c[i]($(this))
					ob.create();
					if (ob.resize) ob.resize();
					els_created.push({
						controller: ob,
						guid: _guid

					});
				});
			}
		}

		function checkRemoved(){
			var els_to_remove = [];
			for (var i=0;i<els_created.length;i++){
				if ($("component-created-" + els_created[i].guid).length==0){
					els_created[i].controller.destroy();
					els_to_remove.push(i);

				}
			}
			for (var i=0;i<els_to_remove.length;i++){
				els_created.splice(els_to_remove[i],1);
			}
			
		}

		function resize(){
			for (var i = 0; i < els_created.length; i++) {
				if (els_created[i].controller.resize) els_created[i].controller.resize();
			}
		}

		function scroll(){
			for (var i = 0; i < els_created.length; i++) {
				if (els_created[i].controller.scroll) els_created[i].controller.scroll();
			}
		}

		return {
			add: addComponents,
			checkNew: checkNew,
			checkRemoved: checkRemoved,
			resize: resize,
			scroll: scroll
		}
	}

	

	function requestJSON(config){
		if (cache_json[config.url]){
			return config.success(cache_json[config.url]);
		}else{
			preloader.show();
			
			$.ajax({
				url:paths.config.api + config.url,
				success: function(_data){
					cache_json[config.url] = _data;
					console.log(1)
					config.success(_data);
					preloader.hide();
				}
			})
		}
	}

	function setConfig(_config){
		config = _config;
		console.log(config);
	}

	/* guid */

	function guid() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
	}

	return {
		isSmartphone: function(){ return is_smartphone; },
		config: setConfig,
		render: render,
		ui: addUIComponents,
		preloader: addPreloader,
		sections: addSections,
		goto: goto,
		paths: paths,
		url: url,
		checkLinks: bindLinks,
		requestJSON: requestJSON,
		components: components.add,
		checkComponents: components.checkNew,
		checkComponentsRemoved: components.checkRemoved,
		templates: function(){ return TEMPLATES; }
	}

})();