'use strict';

function getDogImage() {
    let input = "",
  fetch('https://dog.ceo/dog-api/documentation/random')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function watchForm() {
  $('form').submit(event => {
      
    event.preventDefault();
    getDogImage();
  });
}
 
numdog {
    if ()
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

// set new image to a string 
//loop through the message
