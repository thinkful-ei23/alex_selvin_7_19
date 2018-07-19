'use strict';


$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
  console.log(this);
  event.preventDefault();
  let list = $(this).closest('li').find('span')[0];
  console.log(list);
  $(list).toggleClass('shopping-item__checked');
});



$('.shopping-list').on('click', '.shopping-item-delete', function (event) {
  console.log(this);
  const deleteList = $(this).closest('li')[0];
  console.log(deleteList);
  $(deleteList).remove();
});



$('#js-shopping-list-form').on('submit', event => {
  event.preventDefault();
  const inputValue = $('.js-shopping-list-entry').val();
  $('.js-shopping-list-entry').val('');
  console.log(inputValue);

  const htmlElement =
    `
    <li>
      <span class="shopping-item">${inputValue}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
  `
  $('.shopping-list').append(htmlElement);

});


const shoppingList = $('.shopping-list');