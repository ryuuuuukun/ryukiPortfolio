// ハンバーガーメニュー
$(function () {
  $('#jsi-btn-hamburger').click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass('active')) {
      $('.nav-menu').addClass('active');
    } else {
      $('.nav-menu').removeClass('active');
    }
  });
});

// ロード画面
$(function () {
  $(window).on('load', function () {
    $("#pageloading__wrap").delay(100).fadeOut('slow');
  });

  function loaderClose() {
    $("#pageloading__wrap").fadeOut('slow');
  }
  setTimeout(loaderClose, 200);
});


// フィルター機能
var $filters = $('.filter [data-filter]'),
  $boxes = $('.work-cards-group [data-category]');

$filters.on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  $filters.removeClass('active');
  $this.addClass('active');

  var $filtertag = $this.attr('data-filter');

  if ($filtertag == 'all') {
    $boxes.removeClass('is-animated')
      .fadeOut().promise().done(function () {
        $boxes.addClass('is-animated').fadeIn();
      });
  } else {
    $boxes.removeClass('is-animated')
      .fadeOut().promise().done(function () {
        $boxes.filter('[data-category = "' + $filtertag + '"]')
          .addClass('is-animated').fadeIn();
      });
  }
});

// scroll animation
$(function () {
  $(window).scroll(function () {
    $('.effect-fade').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      console.log(`scroll:` + scroll);
      console.log(`elempos:` + elemPos);
      if (scroll > elemPos - 600) {
        $(this).addClass('effect-scroll');
      }
    });
  });
});