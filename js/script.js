'use strict';

const body = document.body;
const click = document.querySelector('#click');

click.addEventListener('click', isChecked);

function isChecked() {
   if (click.checked) {
      body.classList.add('lock');
   } else {
      body.classList.remove('lock');
   }
}