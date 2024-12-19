$(document).ready(function() {

    window.onscroll = function() {
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
            $('header').stop().animate({"height": '50px'}, "fast");
          } else {
            $('header').stop().animate({"height": '90px'}, "fast");
          }
    }

});