$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

  $(document).ready(function() {
    $('select').material_select();
  });
       

$('.local-link').click(function(){
  var dragTarget = $('.drag-target');
  $('#nav-mobile').css('left', -250);
  dragTarget.css({width: '', right: '', left: '0'});
  $('#sidenav-overlay').css('opacity', 0);
});