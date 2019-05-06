$('.close').click(function(){
  popupClose();
});

$('.opacity').click(function(){
  popupClose();
});

$('#tarifOne').click(function() {
  $('.tarifOne').css({'z-index':'25','opacity':'1'})
});

$('#tarifTwo').click(function() {
  $('.tarifTwo').css({'z-index':'25','opacity':'1'})
});

$('#tarifTree').click(function() {
  $('.tarifTree').css({'z-index':'25','opacity':'1'})
});

function popupOpen() {
  $('.popup').css({'z-index':'30','opacity':'1'});
}

function popupClose() {
  $('.popup').css({'z-index':'-10','opacity':'0'});
  $('.popupTarif').css({'z-index':'-10','opacity':'0'});
}

var i = 0;

var timer = setInterval(slider,3000);

$('#cir1').click(function() {
  i = 0;
  $('#slide').css('left', i + '%');
  $('#cir1').addClass('active');
  $('#cir2').removeClass('active');
  $('#cir3').removeClass('active');
  $('#cir4').removeClass('active');
  $('#bl1').css('opacity','1');
  $('#bl2').css('opacity','0');
  $('#bl3').css('opacity','0');
  $('#bl4').css('opacity','0');
  clearInterval(timer);
  timer = setInterval(slider,3000);
});

$('#cir2').click(function() {
  i = -100;
  $('#slide').css('left', i + '%');
  $('#cir1').removeClass('active');
  $('#cir2').addClass('active');
  $('#cir3').removeClass('active');
  $('#cir4').removeClass('active');
  $('#bl1').css('opacity','0');
  $('#bl2').css('opacity','1');
  $('#bl3').css('opacity','0');
  $('#bl4').css('opacity','0');
  clearInterval(timer);
  timer = setInterval(slider,3000);
});

$('#cir3').click(function() {
  i = -200;
  $('#slide').css('left', i + '%');
  $('#cir1').removeClass('active');
  $('#cir2').removeClass('active');
  $('#cir3').addClass('active');
  $('#cir4').removeClass('active');
  $('#bl1').css('opacity','0');
  $('#bl2').css('opacity','0');
  $('#bl3').css('opacity','1');
  $('#bl4').css('opacity','0');
  clearInterval(timer);
  timer = setInterval(slider,3000);
});

$('#cir4').click(function() {
  i = -300;
  $('#slide').css('left', i + '%');
  $('#cir1').removeClass('active');
  $('#cir2').removeClass('active');
  $('#cir3').removeClass('active');
  $('#cir4').addClass('active');
  $('#bl1').css('opacity','0');
  $('#bl2').css('opacity','0');
  $('#bl3').css('opacity','0');
  $('#bl4').css('opacity','1');
  clearInterval(timer);
  timer = setInterval(slider,3000);
});

function slider() {
  if (i == 0) {
    i = -100;
    $('#slide').css('left', i + '%');
    $('#cir1').removeClass('active');
    $('#cir2').addClass('active');
    $('#bl1').css('opacity','0');
    $('#bl2').css('opacity','1');
    $('#bl3').css('opacity','0');
    $('#bl4').css('opacity','0');
  } else if (i == -100) {
    i = -200;
    $('#slide').css('left', i + '%');
    $('#cir2').removeClass('active');
    $('#cir3').addClass('active');
    $('#bl1').css('opacity','0');
    $('#bl2').css('opacity','0');
    $('#bl3').css('opacity','1');
    $('#bl4').css('opacity','0');
  } else if (i == -200) {
    i = -300;
    $('#slide').css('left', i + '%');
    $('#cir3').removeClass('active');
    $('#cir4').addClass('active');
    $('#bl1').css('opacity','0');
    $('#bl2').css('opacity','0');
    $('#bl3').css('opacity','0');
    $('#bl4').css('opacity','1');
  } else if (i == -300) {
    i = 0;
    $('#slide').css('left', i + '%');
    $('#cir4').removeClass('active');
    $('#cir1').addClass('active');
    $('#bl1').css('opacity','1');
    $('#bl2').css('opacity','0');
    $('#bl3').css('opacity','0');
    $('#bl4').css('opacity','0');
  }
};

if (document.documentElement.clientWidth >= 1050) {
  $(window).bind('scroll',function(e){
    parallaxScroll();
  });
  function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    if (scrolled >= 50) {
      $('.human').css({'top':(420+(scrolled*.5))+"px",'opacity':'1'});
    } else if (scrolled <= 50) {
      $('.human').css('opacity','0');
    }
    $('.cld1').css('top',(130-(scrolled*.3))+'px');
    $('.cld2').css('top',(260-(scrolled*.2))+'px');
    $('.cld3').css('top',(200-(scrolled*.2))+'px');
    $('.cld4').css('top',(270-(scrolled*.2))+'px');
    $('.cld5').css('top',(250-(scrolled*.1))+'px');
    $('.cld6').css('top',(150-(scrolled*.2))+'px');
    $('#main').css('transform', 'translateY(' + (1-(scrolled*.2)) + 'px)');
    $('#main2').css('transform','translateY(' + (1-(scrolled*.2)) + 'px)');
    if (scrolled >= 650) {
      $('#main3').addClass('bord');
    } else if (scrolled <= 650) {
      $('#main3').removeClass('bord');
    }
    $('.human2').css('top',(1+(scrolled-2420)*1.2)+'px');
    $('#second').css('transform', 'translateY(' + (1+(scrolled*.3)) + 'px)');
    $('#second2').css('transform','translateY(' + (1+(scrolled*.3)) + 'px)');
    if (scrolled >= 150) {
      $('#second3').css('opacity','0');
    } else if (scrolled <= 150) {
      $('#second3').css('opacity','1');
    }
    $('.net').css('background-position-y',(1-(scrolled*.3))+'px');
    console.log(scrolled);
  }
}

$(function() {

  $(".toggle_mnu").click(function() {
      $(".sandwich").toggleClass("active");
  });



  $(".toggle_mnu").click(function() {
      if ($(".top_mnu").is(":visible")) {
          $(".top_text").css("opacity", "1");
          $(".top_mnu").fadeOut(600);
          $(".top_mnu ul li a").removeClass("fadeInUp animated");
      } else {
          $(".top_text").css("opacity", ".1");
          $(".top_mnu").fadeIn(600);
          $(".top_mnu ul li a").addClass("fadeInUp animated");
      };
  });

});
