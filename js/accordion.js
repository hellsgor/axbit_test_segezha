'use strict'


let titles = document.querySelectorAll('.accordion-section__title-block');
//console.log(titles);
let accordions = document.querySelectorAll('.accordion-section');
//console.log(accordions);


for (let title of titles) {
	title.onclick = function () {
		//console.log(this);
		//console.log(this.parentNode);

		if ((this.parentNode).classList.contains('active')) {
			(this.parentNode).classList.remove('active');
		} else {
			for (let accordion of accordions) {
				accordion.classList.remove('active');
			}
			(this.parentNode).classList.add('active');
		}
	}
}