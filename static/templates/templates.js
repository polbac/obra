this["TEMPLATES"] = this["TEMPLATES"] || {};
this["TEMPLATES"]["about"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "\n<section id=\"about\">\n	"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.body : stack1), depth0)) != null ? stack1 : "")
    + "\n	<a href=\""
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.about : depth0)) != null ? stack1.cv : stack1), depth0))
    + "\" class='external cv' download>Download CV</a>\n</section>";
},"useData":true});
this["TEMPLATES"]["awards"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "		<div class=\"award item-list\">\n			\n			<div class=\"title\">\n				\n				\n\n				\n					\n				 \n"
    + ((stack1 = (helpers.isnotlinkandimage || (depth0 && depth0.isnotlinkandimage) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.award_image : depth0),(depth0 != null ? depth0.text_link : depth0),(depth0 != null ? depth0.link : depth0),{"name":"isnotlinkandimage","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "				\n				\n				\n \n				</div>\n			<div class=\"content\"> \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.award_image : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.link : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div> \n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<div class='title' >"
    + container.escapeExpression(((helper = (helper = helpers.award_title || (depth0 != null ? depth0.award_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"award_title","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return ((stack1 = (helpers.islistnotexternallink || (depth0 && depth0.islistnotexternallink) || alias2).call(alias1,(depth0 != null ? depth0.award_image : depth0),(depth0 != null ? depth0.text_link : depth0),(depth0 != null ? depth0.link : depth0),{"name":"islistnotexternallink","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.islistexternallink || (depth0 && depth0.islistexternallink) || alias2).call(alias1,(depth0 != null ? depth0.award_image : depth0),(depth0 != null ? depth0.text_link : depth0),(depth0 != null ? depth0.link : depth0),{"name":"islistexternallink","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<a class='title' href=\"/obra/awards/"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" href-index='/obra/awards'>"
    + alias4(((helper = (helper = helpers.award_title || (depth0 != null ? depth0.award_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"award_title","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<a class='title' href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" target='_blank' class='external' href-index='/obra/awards'>"
    + alias4(((helper = (helper = helpers.award_title || (depth0 != null ? depth0.award_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"award_title","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "						<div style='line-height:0'>\n						<img style='max-width:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.award_image : depth0)) != null ? stack1.width : stack1), depth0))
    + "px;width:100%'src=\""
    + ((stack1 = container.invokePartial(partials.image_base,depth0,{"name":"image_base","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.award_image : depth0)) != null ? stack1.file : stack1), depth0))
    + "\" alt=\"\">\n						</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" class='external external-link' target='_blank'>"
    + alias4(((helper = (helper = helpers.text_link || (depth0 != null ? depth0.text_link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text_link","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<section id=\"awards\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.awards : depth0)) != null ? stack1.list : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>";
},"usePartial":true,"useData":true});
this["TEMPLATES"]["contact"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<section id=\"contact\">\n	"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.body : stack1), depth0)) != null ? stack1 : "")
    + " \n</section>";
},"useData":true});
this["TEMPLATES"]["events"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "		<div class=\"event\">\n			\n			"
    + container.escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "<br>\n			"
    + ((stack1 = ((helper = (helper = helpers.post_content || (depth0 != null ? depth0.post_content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.video_embebed : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "				<img style='margin-top:32px;max-width:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.width : stack1), depth0))
    + "px;width:100%'src=\""
    + ((stack1 = container.invokePartial(partials.image_base,depth0,{"name":"image_base","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.file : stack1), depth0))
    + "\" alt=\"\">\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				\n				<div class=\"video-video-wrapper\">\n					<div class=\"videoWrapper\">\n\n					"
    + ((stack1 = ((helper = (helper = helpers.video_embebed || (depth0 != null ? depth0.video_embebed : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"video_embebed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n					</div> \n				</div>\n \n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<aside id='events'>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</aside>";
},"usePartial":true,"useData":true});
this["TEMPLATES"]["lectures"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "		<div class=\"lecture item-list\"> \n			\n			<div class=\"title\">\n				\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lecture_description : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "				\n				\n \n				</div>\n			<div class=\"content\">\n				<a href=\"/obra/lectures/\" style='text-decoration: none'>\n				"
    + ((stack1 = ((helper = (helper = helpers.lecture_description || (depth0 != null ? depth0.lecture_description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"lecture_description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n				</a>\n			</div> \n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<a href=\"/obra/lectures/"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" href-index='/obra/lectures'>\n				\n							"
    + alias4(((helper = (helper = helpers.lecture_title || (depth0 != null ? depth0.lecture_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lecture_title","hash":{},"data":data}) : helper)))
    + "\n						</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						"
    + container.escapeExpression(((helper = (helper = helpers.lecture_title || (depth0 != null ? depth0.lecture_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"lecture_title","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<section id=\"lectures\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.lectures : depth0)) != null ? stack1.list : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>";
},"useData":true});
this["TEMPLATES"]["navigation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"preloader\">\n	<div class=\"bar-fill\"></div>\n</div>\n\n<nav>\n	<a href=\"/events\" id='event-click' class='external'>Events</a><a href=\"/obra\" class='obra-nav'>OBRA</a><a href=\"/\" class='az'>A - Z</a>\n</nav>\n\n<div class=\"clear\"></div>";
},"useData":true});
this["TEMPLATES"]["obra"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"obra\">\n	<div id=\"obra-navigation\">\n		<a href=\"/obra/about\">About</a> / \n		<a href=\"/obra/publications\">Publications</a> / \n		<a href=\"/obra/lectures\">Lectures</a> <span class='hide-on-smartphone'>/ </span>\n		<div class=\"show-on-smartphone\"></div>\n		<a href=\"/obra/awards\">Awards</a> / \n		<a href=\"/obra/contact\">Contact</a>\n	</div>\n\n	<div id=\"obra-content\"></div>\n	\n</section> ";
},"useData":true});
this["TEMPLATES"]["project-detail"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div slider>\n					"
    + container.escapeExpression((helpers.json || (depth0 && depth0.json) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.detail : depth0)) != null ? stack1.extended : stack1)) != null ? stack1.images : stack1),{"name":"json","hash":{},"data":data}))
    + "\n				</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			        <div class=\"swiper-slide\">\n			        	<img src=\""
    + ((stack1 = container.invokePartial(partials.image_base,depth0,{"name":"image_base","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.file : stack1), depth0))
    + "\" alt=\"\" width='100%'>\n			        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "\n<div class=\"detail\">\n	<div class=\"content\">\n		<div class=\"desktop-only\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.detail : depth0)) != null ? stack1.extended : stack1)) != null ? stack1.images : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n		\n		<div class=\"smartphone-only\">\n			<div class=\"swiper-container\">\n			    <div class=\"swiper-wrapper\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.detail : depth0)) != null ? stack1.extended : stack1)) != null ? stack1.images : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			    </div>\n			</div>\n		</div>\n\n		<div class=\"description\">\n			"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.detail : depth0)) != null ? stack1.post_content : stack1), depth0)) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});
this["TEMPLATES"]["projects"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<article data-id='"
    + alias4(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ID","hash":{},"data":data}) : helper)))
    + "'>\n			\n			<div class=\"title\"><a href=\"/projects/"
    + alias4(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ID","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.post_name || (depth0 != null ? depth0.post_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_name","hash":{},"data":data}) : helper)))
    + "\" href-index='/'>"
    + ((stack1 = ((helper = (helper = helpers.post_title || (depth0 != null ? depth0.post_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a></div>\n\n		</article>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section id=\"projects\">\n	<!--div id=\"abc\">\n		\n	</div-->\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	\n	<div id=\"next-arrow\">\n		<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n	 viewBox=\"0 0 477.175 477.175\" style=\"enable-background:new 0 0 477.175 477.175;\" xml:space=\"preserve\">\n<g>\n	<path d=\"M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5\n		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z\n		\"/>\n</g>\n</svg>\n	</div>\n\n	<div id=\"back-arrow\">\n		<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n	 viewBox=\"0 0 477.175 477.175\" style=\"enable-background:new 0 0 477.175 477.175;\" xml:space=\"preserve\">\n<g>\n	<path d=\"M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z\"/>\n</g>\n</svg>\n	</div>\n</section>";
},"useData":true});
this["TEMPLATES"]["publications"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "		<div class=\"publication item-list\">\n			\n				\n\n"
    + ((stack1 = (helpers.isnotlinkandimage || (depth0 && depth0.isnotlinkandimage) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.publication_image : depth0),(depth0 != null ? depth0.text_link : depth0),(depth0 != null ? depth0.link : depth0),{"name":"isnotlinkandimage","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "				\n\n			\n\n				<div class=\"content\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.publication_image : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.text_link : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n				</div>\n		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<div class='title' >"
    + container.escapeExpression(((helper = (helper = helpers.publication_title || (depth0 != null ? depth0.publication_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"publication_title","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return ((stack1 = (helpers.islistnotexternallink || (depth0 && depth0.islistnotexternallink) || alias2).call(alias1,(depth0 != null ? depth0.publication_image : depth0),(depth0 != null ? depth0.text_link : depth0),(depth0 != null ? depth0.link : depth0),{"name":"islistnotexternallink","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.islistexternallink || (depth0 && depth0.islistexternallink) || alias2).call(alias1,(depth0 != null ? depth0.publication_image : depth0),(depth0 != null ? depth0.text_link : depth0),(depth0 != null ? depth0.link : depth0),{"name":"islistexternallink","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<a class='title' href=\"/obra/publications/"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" href-index='/obra/publications'>"
    + alias4(((helper = (helper = helpers.publication_title || (depth0 != null ? depth0.publication_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"publication_title","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<a class='title' href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" target='_blank' class='external' href-index='/obra/publications'>"
    + alias4(((helper = (helper = helpers.publication_title || (depth0 != null ? depth0.publication_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"publication_title","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "						<div style='line-height:0'>\n							<a href='/obra/publications'><img style='max-height:460px;max-width:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.publication_image : depth0)) != null ? stack1.width : stack1), depth0))
    + "px;'src=\""
    + ((stack1 = container.invokePartial(partials.image_base,depth0,{"name":"image_base","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.publication_image : depth0)) != null ? stack1.file : stack1), depth0))
    + "\" alt=\"\"></a>\n							</div>\n\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "						<a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" class='external external-link' target='_blank'>"
    + alias4(((helper = (helper = helpers.text_link || (depth0 != null ? depth0.text_link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text_link","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<section id=\"publications\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.publications : depth0)) != null ? stack1.list : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>";
},"usePartial":true,"useData":true});