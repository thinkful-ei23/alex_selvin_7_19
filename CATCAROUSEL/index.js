'use strict';
$('.thumbnail').click(function () {
  console.log(this);
  // event.preventDefault();
  let target = event.target;
  console.log(target);
  // const image = $(this.img).html();
  // console.log(image);
  $('.hero').html(target);
});