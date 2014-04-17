$(document).ready(function(){
   $('#up-btn').click(function() {
    	$('#player').animate({top: "-=10px"}, 'fast');
    });
    $('#down-btn').click(function() {
    	$('#player').animate({top: "+=10px"}, 'fast');
    });
    $('#left-btn').click(function() {
    	$('#player').animate({left: "-=10px"}, 'fast');
    });
    $('#right-btn').click(function() {
    	$('#player').animate({left: "+=10px"}, 'fast');
    });
});
