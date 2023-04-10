var swiper = new Swiper(".mySwiper", {
  effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			loop: true,
			coverflowEffect: {
				rotate: 0,
				stretch: -50,
				depth: 100,
				modifier: 2,
				slideShadows: true,
			},
      
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });