 /***toggle button on or off sidebar */
 $(document).on('click',
     "#menu-toggle",
     function(e) {
         e.preventDefault();
         $("#wrapper").toggleClass("toggled");
     });

 /*Scroll to top when arrow up clicked BEGIN*/
 $(window).scroll(function() {
     var height = $(window).scrollTop();
     if (height > 100) {
         $('#back2Top').fadeIn();
     } else {
         $('#back2Top').fadeOut();
     }
 });
 $(document).ready(function() {
     $("#back2Top").click(function(event) {
         event.preventDefault();
         $("html, body").animate({ scrollTop: 0 }, "2000");
         return false;
     });

 });
 /*Scroll to top when arrow up clicked END*/