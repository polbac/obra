

$(document).ready(function(){
	
	webapp.paths.config = {
		api: "http://obra.neptuno.digital/api/",
		images: "http://obra.neptuno.digital/wp-content/uploads/"
	}; 

	webapp.config({
		smartphone_width: 768
	});
	
	webapp.sections([Projects, Obra], "main");
	webapp.components([Slider]);
	webapp.ui([Navigation]);
	webapp.preloader(Preloader);

	webapp.render();
		


    
    
});



