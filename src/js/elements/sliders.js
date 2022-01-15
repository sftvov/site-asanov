@@include('libs/swiper.min.js');

let slider = new Swiper('.offer__swiper', {
	observer: true,
	observeParents: true,
	slidesPerView: 4,
	// autoHeight: true,
	spaceBetween: 20,
	speed: 800,
	// touchRatio: 2,
	simulateTouch: true,
	grabCursor: true,
	// Dotts
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	type: 'fraction',
	// },
	initialSlide: 1,
	// effect: 'fade',
	// Arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
	// controller: {
	// 	control: mini_slider,
	// },
	// thumbs: {
	// 	swiper: {
	// 		el: ".miniMain-slider__swiper",
	// 		slidesPerView: 3
	// 	}
	// },
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: true,
	// },	
	// loop: true,
	//preloadImages: false,
	//lazy: true,
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	// on: {
	// 	lazyImageReady: function () {
	// 		ibg();
	// 	},
	// }
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},

});

