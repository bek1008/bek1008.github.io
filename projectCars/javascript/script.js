// $(document).ready(function () {
//     // let $burger = $('.burger');
//     // let $menu_hed = $('.header_menu');
//     // let $menu = $('.menu_top');
//     // let $close = $('#close');
//     let $links = $('.nav-link');


// $links.click(function (e) {
  
//     e.preventDefault();
//     $links.removeClass('active_links');
//     let id = $(this).addClass('active_links').attr('href');  
//     let target = $(id).offset().top;

//     $('html , body').animate({
//         scrollTop : target,
//     }, 1000)

//  })


//  /* scroll  */
//  $(window).scroll(function () {
//      let scroll = $(this).scrollTop();  // 1926 
//      $links.each(function () {
//          let target = $(this).attr('href');
//          let selector = $(target).offset().top;     // 
//         if(scroll >= selector){
//             $links.removeClass('active_links');
//             $(this).addClass('active_links');
//         }
//      })
//  })



// });



var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });