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
  // dragTarget.css({width: '', right: '', left: '0'});
  $('body').css('overflow', '');
          $('#sidenav-overlay').velocity({opacity: 0}, {duration: 200, queue: false, easing: 'easeOutQuad',
            complete: function() {
              $(this).remove();
            } });
            // Reset phantom div
            dragTarget.css({width: '', right: '', left: '0'});
            $('#nav-mobile').velocity(
              {left: -1 * (240 + 10)},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic'

            });
  // $('#sidenav-overlay').css('display', 'none');
});