/* maskinput */
jQuery(function($){
$("#tel").mask("+38(999) 999-9999");   
});
/* burger-menu */
$(document).ready(function(){

$('a.menu-trigger').click(function(){
	$('.menu nav ul').slideToggle(500);
});	
$(window).resize(function() {
	if($(window).width() > 800) {
		$('.menu nav ul').removeAttr('style');
	}
});

});






		