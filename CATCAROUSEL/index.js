'use strict';
/* global $ */
$('.thumbnail').click(function (event) {
  // event.preventDefault();
  // event.stopPropagation();
  console.log(event.target.src);
  // const image = $(this.img).html();
  // console.log(image);
  $('.hero img').attr('src', event.target.src);
 
});