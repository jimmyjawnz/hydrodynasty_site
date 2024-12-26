function closeModal(modal) {
  console.log("Exit " + modal.title);
  $(modal + ' #exit-area').hide();
  $(modal).fadeOut("slow");
}

$(document).ready(function() {

  // Shrinks the Header on scroll
  window.onscroll = function() {
    const width = Math.max(document.clientWidth || 0, window.innerWidth || 0);
    if (width >= 1000) {
      if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        $('header').stop().animate({"height": '50px', backgroundColor: "#0c0c0c"}, "fast");
      }
      else {
        $('header').stop().animate({"height": '90px', backgroundColor: "#0c0c0c"}, "fast");
      }
    }
    else
    {
      if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        $('header nav.mobile').stop().fadeOut("fast");
        $('header').stop().animate({"height": '90px', backgroundColor: "transparent"}, "fast");
      }
      else {
        $('header nav.mobile').stop().fadeIn("fast");
        $('header').stop().animate({"height": '90px', backgroundColor: "#0c0c0c"}, "fast");
      }
    }
  }

  // LOGIN HANDLER
  $('#login').click(function() {
    console.log("Clicked login");
    $('#login-modal #exit-area').show();
    $('#login-modal').fadeIn("slow");
  });

  $('#login-modal #exit-area').click(function() {
    closeModal('#login-modal');
  });

});