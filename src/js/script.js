// let wrapper = document.querySelector('.wrapper');
let page = document.querySelector('.page');
let body = document.querySelector('body');
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
let topHeader = header.querySelector('.header__top');
let bottomHeader = header.querySelector('.header__bottom');
let menu = document.querySelector('.menu');
let burger = document.querySelector('.header__burger');
// let loading = document.querySelector('.loading');
// let forms = document.getElementsByTagName('form');
let searchWrapper = document.querySelector('.header__search-wrapper');
let search = searchWrapper.querySelector('.header__search');
let searchBtn = searchWrapper.querySelector('.header__search-btn'); 
// ----------------------------------------------------------------------

let items = document.querySelectorAll('.menu__punkt');

for(let i=0; i<items.length; i++) {
	items[i].addEventListener('mouseenter', () => {
		if(body.offsetWidth > 767) {menu.style.width = '560px';}
	})
	items[i].addEventListener('mouseleave', () => {
		if(body.offsetWidth > 767) {menu.style.width = '280px';}
	})
}

let headerFix;

function spaceForHeader() {
	headerFix = topHeader.offsetHeight;
	bottomHeader.style.marginTop = headerFix + 'px';
}

function spaceForMobileMenu() {
	headerFix = topHeader.offsetHeight;
	if (body.offsetWidth < 1280) {
		menu.style.paddingTop = headerFix + 'px';
	} else {
		menu.style.paddingTop = '0px';
	}
}




// ----------------------------------------------------------------------

//include('functions/webp.js');
//include('functions/sendmail.js');
//include('functions/isMobile.js');
@@include('functions/slide.js');
@@include('functions/dynamic_adapt.js');
@@include('elements/burger.js');
// include('elements/search.js');
@@include('elements/sliders.js');
//include('elements/popups.js');
//include('elements/gallery.js');
//include('elements/tabs.js');
//include('elements/scroll.js');
@@include('elements/spollers.js');
@@include('elements/quantity.js');

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

window.onresize = () => {
	// addTouchClassForMobile();
	spaceForHeader();
	spaceForMobileMenu();
	// closeBurger();
	changeBtnContent();
	if(body.offsetWidth<768){
		menu.style.width = '100vw'
	} else {menu.style.width = '280px'}
};

window.onload = () => {
	// addTouchClassForMobile();
	spaceForHeader();
	spaceForMobileMenu();
	changeBtnContent();
};


document.addEventListener('click',(e) => {
	if(e.target === search) {
		searchWrapper.classList.add('_focus');
	} else if(e.target !== searchBtn) {searchWrapper.classList.remove('_focus');}
})

// ----------------------------------------------------------------------
