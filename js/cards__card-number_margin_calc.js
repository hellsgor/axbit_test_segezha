'use strict'

let numbers = document.querySelectorAll('.cards__card-number');

for (let i = 0; i < numbers.length; ++i) {

	let value = numbers[i].textContent;

	if (value === '') {
		numbers[i].style.marginRight = '0';
	}
}