$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
  	$('.ryu-ready').hide();
	$('.ryu-still').show();
  })
  .mousedown(function() {
  	// play hadouken sound
  	playHadouken();
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	// show hadouken and animate it to the right of the screen
  	$('.hadouken').show().animate(
  	{'left': '1020px'},
  	500, 
  	function() {
  		$(this).hide();
  		$(this).css('left', '520px');
  	});	
  })
  .mouseup(function() {
  	//ryu goes back to his ready position
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  })
 
$(document).keydown(function(key) {
  if(key.which==88) {
    console.log("X pressed");
    $('.ryu-ready').hide();
    $('.ryu-cool').show();
  } 
});

});


function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};

/*
 $(document).keydown(function(key) {
    if(key.which==88) {
    console.log("X pressed");
    $('.ryu-ready').hide();
    $('.ryu-cool').show();
    } 
  });.keyup(function(e) {
    if (e.keyCode = '88') {
      console.log("X up");
    $('ryu-cool').hide();
    $('ryu-ready').show();
  */

