'use strict';
console.log('hello');

function fizzbuzzer(num) {
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
}

const generateFizzHTML = function(fizzedN) {
  let fizzClass = '';
  if (typeof fizzedN !== 'number') {
    fizzClass = fizzedN;
  }

  return `
    <div class = "fizz-buzz-item ${fizzClass}" >
      <span>${fizzedN}</span> 
    </div>
  `;
};


const handleSubmit = function () {
  $('#number-chooser').on('submit', event => {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    $('#number-choice').val('');
    
    const fizzbuzzResults = [];
    for (let i = 0; i <= countTo; i++) {
      fizzbuzzResults.push(fizzbuzzer(i));
    }
    
    const htmlElements = fizzbuzzResults.map(res => generateFizzHTML(res));
    $('.js-results').html(htmlElements);
  });
};

$(function() {
  handleSubmit();
});