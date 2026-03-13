

        // 
$('.mobtoggle').click(function() {
  $('.mobtoggle').toggleClass('open');
  $('.mainMenu').toggleClass('show');

  if ($('.mainMenu').hasClass('show')) {
    $('body').addClass('no-scroll');
  } else {
    $('body').removeClass('no-scroll');
  }
});

// $(document).ready(function () {
//   function isMobile() {
//     return window.matchMedia("(max-width: 991px)").matches;
//   }

//   $('.drop > a').click(function (e) {
//     if (!isMobile()) return;

//     e.preventDefault();

//     let parent = $(this).closest('.drop');

//     parent.toggleClass('open');
//     parent.children('.subMenu').stop(true, true).slideToggle(300);
//   });

//   $(window).on('resize', function () {
//     if (!isMobile()) {
//       $('.subMenu').removeAttr('style');
//       $('.drop').removeClass('open');
//     }
//   });
// });

$('.drop > a').click(function (e) {
  e.preventDefault();
  let parent = $(this).closest('.drop');
  parent.toggleClass('open');
});

 