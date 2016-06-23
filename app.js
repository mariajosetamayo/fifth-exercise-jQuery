var main = function() {

	$("img").click(function(){
		$(".notification-menu").toggle();
	});

//When the button is clicked, the class btn-like (contained in CSS) is added to the button.
	
	$(".btn").click(function(){
		$(this).toggleClass("btn-like");
	});


  
}

$(document).ready(main);