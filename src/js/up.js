var upButton = (function(){

	var initial = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('.scrolup').mouseover(_opacityPicOn); // навождение курсора на кнопку вверх
		$('.scrolup').mouseout(_opacityPicOff); // курсор убран с кнопки вверх
		$('.scrolup').click(_scrollUp); // клик на кнопку вверх
		$(window).scroll(_fadeBtn); // кнопка исчезает при прокрутке вверх
	}

	var _opacityPicOn = function () {
		$( this ).animate({opacity: 0.65},100);
	};

	var _opacityPicOff = function () {
		$( this ).animate({opacity: 1},100);
	};

	var _scrollUp = function () {
		window.scroll(0 ,0); 
		return false;
	};

	var _fadeBtn = function() {
		if ( $(document).scrollTop() > 0 ) {
			$('.scrolup').fadeIn('fast');
		} else {
			$('.scrolup').fadeOut('fast');
		}
	};

	return {
		init: initial
	};

})();

upButton.init();