var slider = (function(){

	var initial = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('.slider__btn').on('click', _listSlidePic); // пролистывание слайдера
	}

	var _listSlidePic = function (e) {
		e.preventDefault();

		var $this = $(this),
				container = $this.closest('.slider'), // обёртка для слайдера
				list = container.find('.slider__list'), // наш список
				items = container.find('.slider__item'), // наши элементы списка
				activeSlide = items.filter('.active'), // активный слайд
				nextSlide = activeSlide.next(), // следующий слайд от активного
				prevSlide = activeSlide.prev(), // предыдущий слайд от активного
				firstSlide = items.first(), // первый слайд (для цикла карусели)
				lastSlide = items.last(), // последний слайд (для цикла карусели)
				sliderOffset = container.offset().left, // позиция элемента относительно страницы (влево)
				reqPos = 0; // переменная для записи положения искомого слайда

				if($(this).hasClass('slider__btn_next')) {

					if(nextSlide.length) {
					findReqPos(nextSlide);
					removeActiveClass(nextSlide);
						} else {
						findReqPos(firstSlide);
						removeActiveClass(firstSlide);
						}
				} else { 

					if(prevSlide.length) {
					findReqPos(prevSlide);
					removeActiveClass(prevSlide);
						} else {
						findReqPos(lastSlide);
						removeActiveClass(lastSlide);
			}
		}

	list.css('left', '-=' + reqPos + 'px');

	// Удаление активного слайда
	function removeActiveClass (reqSlide) {
			reqSlide.addClass('active').siblings().removeClass('active');
		}

	// поиск следующего слайда, относительно текущего
	function findReqPos (slide) {
			reqPos = slide.offset().left - sliderOffset;
		}
};
	return {
		init: initial
	};

})();

slider.init();