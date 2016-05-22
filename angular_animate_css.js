angular.module('animatecss.directive',[])
    .directive('animateCss', function($timeout) {
    return {

	    link: function(scope, element, attr) {
		var delay= attr.animateCssDelay || 800;
		var delay= attr.animateCssDuration || null;
		var css_class= attr.animateCss || 'flash';
		var event= attr.animateCssEvent || null;
		var prevent_default= attr.animateCssPrevent || "true";
		if(!event){
		    
		    $timeout(function(){
			element.addClass("animated "+css_class);
		    },delay);
		 
		}
		else
		{
		    element.on(event, function(event) {
			if(prevent_default == "true" )
			{
			    event.preventDefault();
			}
			element.addClass("animated "+css_class);
			
		    });

		}
		if(duration)
		{
		    $timeout(function(){
			element.removeClass("animated "+css_class)
		    },duration);
		}
	    }
	};
});
