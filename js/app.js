$(document).ready(function() {
   $('.intro').fadeIn(2000, function() {
    $(this).fadeOut(2000, function() {
      $('.text').fadeIn(1000);
   });
 });
  ////////////////////////////////////
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
  });
  //this not document
  $(this).keydown(function(key) {
  if (key.which==88) {
    console.log("X keydown");
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').show();
  }
})//;
  $(this).keyup(function(key) {
    if (key.which == 88) {
      console.log('x keyup');
      $('.ryu-cool').hide();
      $('.ryu-still').show();

    }
    });
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};