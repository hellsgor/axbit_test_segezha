'use strict'

let burgerActiveBtn = document.querySelector('.header__burger');
let burgerMenu = document.querySelector('.burger-menu');
let svgPath = document.querySelector('.svg-element-d');
let menuCloseBtn = document.querySelector('.burger-menu__menu-close-btn');
let pad = document.querySelector('.burger-menu__pad');
let body = document.querySelector('body');
let svgPathAttribute = svgPath.getAttribute('d');


burgerActiveBtn.onmouseover = function () {
	svgPath.removeAttribute('d');
	svgPath.setAttribute('d', 'M2.1357 12.6318L31.9931 12.6318');
}

burgerActiveBtn.onmouseout = function () {
	svgPath.removeAttribute('d');
	svgPath.setAttribute('d', 'M11.1357 12.6318L31.9931 12.6318');
}

burgerActiveBtn.onclick = function () {
	burgerMenu.classList.add('burger-menu-active');
	body.style.overflow = 'hidden';
}

menuCloseBtn.onclick = function () {
	burgerMenu.classList.remove('burger-menu-active');
	body.style.overflow = '';
}

pad.onclick = function () {
	burgerMenu.classList.remove('burger-menu-active');
	body.style.overflow = '';
}