$(function() {
    $( ".c-bar__button").on('click',function() {
    $( ".l-contents__sidebar" ) . animate( { width: 'toggle' }, 'slow' );
    $(".c-bar").toggleClass("c-bar__open");
    $(this).toggleClass("c-bar__open");
    $(".p-Menu__nav__text").toggleClass("p-Menu__nav__text__open");
    });
});

$(function() {
    $( ".c-button__close").on('click',function() {
    $( ".l-contents__sidebar" ) . animate( { width: 'toggle' }, 'slow' );
    $(this).toggleClass("c-bar__button");
    });
});

// $(function(){
//     $(".c-bar__button").on('click',function(){
//       $(".l-contents__sidebar").slideToggle(2000);
//      $(".c-bar").toggleClass("c-bar__open");
//    $(this).toggleClass("c-bar__open");
//    $(".p-Menu__nav__text").toggleClass("p-Menu__nav__text__open");
//     });
//   });


// $(function() {
//     $( ".c-button__close").on('click',function() {
//         $(".l-contents__sidebar").removeClass();
//     });
// });