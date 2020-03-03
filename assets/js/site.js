"use strict";




/* Slick Carousel */

// $(document).ready(function(){
//     $(".client-carousel").slick({
//         // options //
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         adaptiveHeight:true,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         centerPadding:'50px',
//         responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 4
//             }
//         }, {
//             breakpoint: 520,
//             settings: {
//                 slidesToShow: 3
//             }
//         },{
//             breakpoint: 320,
//             settings: {
//                 slidesToShow: 3
//             }
//         }]
//     });
// }); /* slick carousel - end */

/* Flickity Carousel */

$('.client__carousel').flickity({
    // options //
    adaptiveHeight: true,
    contain:true,
    groupCells:2,
    pageDots: true,
    prevNextButtons: false,
    resize: false
});





/* TYPED JS V2 */
var typedJS = document.getElementById("typedJS");

var typewriter = new Typewriter(typedJS,{
    
});

typewriter.typeString('This is my creative playground where I showcase my current and upcoming projects')
.pauseFor(2500)
.start();


/* Istope */
// init Isotope
var $grid = $('.grid').isotope({
    // options //
    itemSelector: '.element-item',
});

// filter items on button click //
$('.filter-button-group').on('click','button',function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({filter:filterValue});
});


