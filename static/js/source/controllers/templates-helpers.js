Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});

Handlebars.registerHelper('istype', function(type, toCheck, options) {
  
  if(type[0] === toCheck) {
  	
    return options.fn(this);
  }
  
}); 


Handlebars.registerHelper('isnotfalse', function(context,options) {
  
  if(context !== false) {
  	
    return options.fn(this);
  }
  
}); 

Handlebars.registerHelper('isnotfalsedouble', function(context1,context2,options) {
  
  if(context1 !== false && context2 !== false) {
    
    return options.fn(this);
  }
   
});

Handlebars.registerHelper('islistexternallink', function(image,text_link,link,options) {
  
  if(image == false && text_link == "" && link) {
    console.log("ade")
    return options.fn(this);
  }
  
}); 

Handlebars.registerHelper('islistnotexternallink', function(image,text_link,link,options) {
  
  if(image || text_link!="") {

    return options.fn(this);
  }
  
}); 

Handlebars.registerHelper('isnotlinkandimage', function(image,text_link,link,options) {
  
  if(!image || text_link=="" && link=="") {

    return options.fn(this);
  }
  
}); 



Handlebars.registerHelper('print-type', function(context) {

  return context[0];
  
});