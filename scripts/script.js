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
        $('header nav.mobile').stop().fadeOut(400);
        $('header').stop().animate({"height": '90px', backgroundColor: "transparent"}, 400);
      }
      else {
        $('header nav.mobile').stop().fadeIn(200);
        $('header').stop().animate({"height": '90px', backgroundColor: "#0c0c0c"}, 200);
      }
    }
  }

  // Burger Menu
  $('a.burger').click(function() {
    if ($('body').hasClass("stop-scrolling")) {
      $('a.burger h1').html("☰");
      $(".burger-menu").slideUp();
      $('body').removeClass('stop-scrolling');
    }
    else {
      $('a.burger h1').html("✖");
      $(".burger-menu").slideDown();
      $('body').addClass('stop-scrolling');
    }

  })

  // LOGIN HANDLER
  $('.login-button').click(function() {
    console.log("Clicked login");
    $('#login-modal h1').html("Login");
    $('#login-modal .submit-button').html("Login");
    $('#login-modal input[name=passwordConfirm]').prop("required", false).hide();
    $('#login-modal .login-link').hide();
    $('#login-modal .register-link').show();
    $('#login-modal .exit-area').show();
    $('#login-modal').fadeIn("slow");
  });

  $('#login-modal .exit-area').click(function() {
    closeModal('#login-modal');
  });

  $('.register-button').click(function() {
    $('#login-modal h1').html("Register");
    $('#login-modal .register-link').hide();
    $('#login-modal .login-link').show();
    $('#login-modal .submit-button').html("Register Account");
    $('#login-modal input[name=passwordConfirm]').prop("required", true).show();
    $('#login-modal .exit-area').show();
    $('#login-modal').fadeIn("slow");
  });

  // MODAL HANDLER
});