'use strict'

let menuItems = document.querySelectorAll('.desktop-menu__item');
//console.log(menuItems);
let subMunuItems = document.querySelectorAll('.desktop-submenu');
//console.log(subMunuItems);

for (let menuItem of menuItems) {
	menuItem.onmouseover = function () {
		let subMunuItem = this.querySelector('.desktop-submenu');
		if (subMunuItem.style.display !== 'block') {
			subMunuItem.style.display = 'block';
		}
	}

	menuItem.onmouseout = function () {
		let subMunuItem = this.querySelector('.desktop-submenu');
		if (subMunuItem.style.display === 'block') {
			subMunuItem.style.display = 'none';
		}
	}
}

