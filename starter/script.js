'use strict';

// Camel case is a way of writing phrases without spaces, where the first letter of each word is capitalized, except for the first letter of the entire compound word

// we will discuss #class here
const modal = document.querySelector('.modal'); // class model

const overlay = document.querySelector('.overlay'); //class overlay

const btnCloseModal = document.querySelector('.close-modal'); // class close model
//All the abobve we had taken from index.html

const btnsOpenModal = document.querySelectorAll('.show-modal'); //class show modal, querySelectorAll will show Nodelist in console

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// use for loop to show modal 1,2,3 in console

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// other function to close the I'm modal wondow by click, it does not disappear until refresh the page.

// we use btnCloseModal to close in click.

btnCloseModal.addEventListener('click', closeModal); // we not calling function like closeModal(). closeModal execute when click event happens.

// we want to close the window on click by overlay
//overlay is ouside area from window

overlay.addEventListener('click', closeModal);

//clipn 81: How event keypress works.we close window on closeModal and overlay, here we close it on esc button.

document.addEventListener('keydown', function (e) {
  //e is parameter
  //3 function of  key.1,keypress(when finger down). 2,keydown and keyup(when finger up execute)
  //console.log(e.key); //e mean event, press any key appear on console
  //we use dot.key to read property what button it is.

  // if e.key equal to escape and modal does not contain hidden class then press escape to close the window.

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
