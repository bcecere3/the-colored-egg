(function($){
  $(function(){

    $('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
    $('.parallax').parallax();
    
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
	var a = $(window).height();
 	$('#index-banner').css('height', a);
 });