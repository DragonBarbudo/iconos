var app = angular.module('IconosApp', ['ui.router', 'hc.marked', 'ngDisqus', 'ngFitText']);

var bgimgs = [];

$(function(){


  moment.locale('es');

   // MENU
    $('#openMenu').click(function(){
      $('#menu').addClass('open');
    });
     $('#menu .close').click(function(){
       closeMenu();
     });

    $('[href="#programas-de-estudio"], [href="#cursos-y-diplomados"], [href="#docentes-y-estudiantes"]').click(function(e){
      e.preventDefault();
      var _this = $(this);
      $('#menu .active').removeClass('active');
      $(_this).addClass('active');

      if($('#menu').is('.open')){
        $('#menu').toggleClass('open');
        $('#menu').toggleClass('openLevel2');
        $('#submenu').toggleClass('open');
      }
      var submenu = $(this).attr('href');
      submenu = submenu.replace('#','');
      $('#submenu .sub').hide();
      $('[role="'+submenu+'"]').show();

    });




}); // JQUERY END


function closeMenu(){
  $('#menu').removeClass('open');
  $('#submenu').removeClass('open');
  $('#menu').removeClass('openLevel2');
  $('#menu .active').removeClass('active');
}



function postplugins(){
  /*################################################*/
    /*################################################*/
      /*################################################*/
        /*################################################*/
    /* framework plugins */

    if( $('[data-scroll]').length>0 ){
      smoothScroll.init();
    }



  buildsliders();



    // FORMULARIO SIMPLE

    if($('form.simple').length>0){
      var resultado;
      $('form.simple').submit(function(e){
        var _this = $(this);
        e.preventDefault();
        var datos = $(this).serialize();
        _this.find('.resultado').html('<i class="fa fa-circle-o-notch fa-spin"></i>');
        $.get('http://www.dragonbarbudo.com/api/email.php?'+datos, function(result){
          resultado = JSON.parse(result);
          if( resultado[0].status === "sent" ){
            _this.find('.resultado').html('Mensaje correctamente enviado.');
          } else {
            _this.find('.resultado').html('Ocurrió un error. Inténtelo de nuevo más tarde.');
          }
        });
      });
    }


    // SCROLLREVEAL
    if($('[data-sr]').length>0){
        window.sr = ScrollReveal({
          reset:true,
          mobile:true
        }).reveal('[data-sr]');
    }


    // BACKSTRETCH

    if($('.bgslider').length>0){

        $('.bgslider').each(function(index){
          bgimgs[index] = [];
          $(this).children('div').each(function(){
            bgimgs[index].push($(this).attr('data'));
          });
          $( $(this).attr('data') ).backstretch(bgimgs[index], {duration: 3000, fade: 750});
        });

     }

    // MODALBOX
    modalboxinit();




        /*################################################*/
      /*################################################*/
    /*################################################*/
  /*################################################*/
    /* custom */






createSVGs();

dateRead();    


}



function dateRead (){
  if( $('[datetime]').length>0 ){
    setTimeout(function(){
      $('[datetime]').each(function(){
        var date = $(this).attr('datetime');
        var filter = $(this).attr('data-moment');
        if(filter){
          var result = moment(date).format(filter);
        } else {
          var result = moment(date).fromNow();
        }
        $(this).html(result);
      });
    }, 1000);
  }
}

function createSVGs(){

      //SVG auto
      $('.svg').each(function(index){
        if($(this).html()==''){
          var svg = $(this);
          var path = svg.attr('data');

          svg.attr('id', 'svg'+index);

          if($(this).attr('data-mask')){
            var s = Snap( '#'+svg.attr('id') );
            var paper = Snap( svg.attr('data-w'), svg.attr('data-h') );
            paper.image(svg.attr('data-img'), 0, 0, svg.attr('data-w'), svg.attr('data-h') );

            Snap.load(path, function(svgM){
              var mainSVG = svgM.select("svg");
              s.append(mainSVG);
              Snap.load( svg.attr('data-mask'), function(svgS){
                  var secSVG = svgS.select("svg");
                  paper.attr({ mask : svgS.select("svg") });
                  mainSVG.append(paper);
              });
            });
          } else {
            svg.load(path);
          }
        } // NOT EMPTY
      });
}



function loadDisqus(){

  var disqus_config = function () {
  this.page.url = window.location.href ; // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = window.location.href; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  (function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = '//iconos.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();
}

function modalboxinit(){
  if($('.box').length>0){
    $('.box').swipebox();
  }
}

function unslickall(){
  $('.slider, .buttonsliders, .buttonslidersNota').slick('unslick');
}
function buildsliders(){
    // SLIDERS
    if($('.slider.one').length>0){
      $('.slider.one').slick({
        prevArrow: '<button class="slick-prev fa fa-caret-left"></button>',
        nextArrow: '<button class="slick-next fa fa-caret-right"></button>',
        autoplay: true
      });
    }

    if($('.slider.multiple, .slider.multiplebox').length>0){
      $('.slider.multiple, .slider.multiplebox').slick({
        //prevArrow: '<button class="slick-prev fa fa-caret-left"></button>',
        //nextArrow: '<button class="slick-next fa fa-caret-right"></button>',
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
          { breakpoint: 960, settings: { slidesToShow: 3,   slidesToScroll: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }
        ]
      });
    }



    if($('.slider.rvoe').length>0){
      $('.slider.rvoe').slick({
        arrows:false,
        adaptiveHeight: true,
        asNavFor: '.buttonsliders',
        swipe: false
      });
      $('.buttonsliders').slick({
        slidesToShow: 5,
        asNavFor: '.rvoe',
        focusOnSelect: true
      });
    }

    if($('.slider.nota').length>0){
      $('.slider.nota').slick({
        arrows:false,
        adaptiveHeight: true,
        asNavFor: '.buttonslidersNota',
        swipe: false
      });

      $('.buttonslidersNota').slick({
        slidesToShow: 2,
        asNavFor: '.nota',
        focusOnSelect: true
      });
    }

    if($('.slider.cursos').length>0){
        $('.slider.cursos').slick({
          arrows:false,
          adaptiveHeight: true,
          asNavFor: '.buttonslidersCursos',
          swipe: false
        });
        $('.buttonslidersCursos').slick({
          slidesToShow: 5,
          asNavFor: '.cursos',
          focusOnSelect: true
        });
      }


}


