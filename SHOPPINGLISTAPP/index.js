'use strict';
/* global $ */



const strikeItem = function(item) {
  $(item).toggleClass('shopping-item__checked');
};

$('.shopping-item-toggle').click(function() {
  // console.log(this);
  const list = $(this).closest('li').find('span')[0];
  console.log(list);
  // list.toggleClass('shopping-item__checked');
  // strikeItem(list);
});



const deleteItem = function(item) {
  $('this.closest(li)').remove();
};
















const addItem = function(item) {

};

const handleSubmit = function () {
  $('#js-shopping-list-form').on('submit', event => {
    console.log(event.val);
    event.preventDefault();
    const countTo = $('#number-choice').val();




  });
};

const shoppingList = $('.shopping-list');



// on click shopping-item-toggle
// go to span parent with the class shopping item
// toggle shopping-item__checked class