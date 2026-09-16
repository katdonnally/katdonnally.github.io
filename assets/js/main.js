// Main JS file

// left and right buttons on image carousels
if (document.querySelector('.portfolio-wrapper')) {
	let rightArrows = document.querySelectorAll('.js-nav-right');
	let leftArrows = document.querySelectorAll('.js-nav-left');
	let viewports = document.querySelectorAll('.portfolio-metadata__carousel-viewport');

	for (let i=0; i<rightArrows.length; i++) {
		let viewport = viewports[i];
		let num = viewport.childElementCount;
		let viewportContentsWidth = viewport.scrollWidth;
		let translateNum = viewportContentsWidth / num;

		function toTheEnd() {
			if (viewport.scrollLeft <= viewportContentsWidth) {
				viewport.scrollLeft += translateNum;
			}
		}

		function toTheStart() {
			if (viewport.scrollLeft >= 0) {
				viewport.scrollLeft -= translateNum;
			}
		}

		rightArrows[i].addEventListener('click', toTheEnd);
		leftArrows[i].addEventListener('click', toTheStart);
		rightArrows[i].addEventListener('touchstart', toTheEnd);
		leftArrows[i].addEventListener('touchstart', toTheStart);
	}
}

if (document.querySelector('.popup-bg-wrapper')) {
	let popUpButton = document.getElementById('popup-button');
	classes = popUpButton.classList;

	console.log(classes);

	function openPopUp() {
		if (popUpButton.classList.contains('popup-content__x-button--hide')) {
			popUpButton.classList.toggle('popup-content__x-button--hide');
			popUpButton.classList.add('.popup-content__x-button--show');
			console.log('show');
			console.log(popUpButton.classList[0]);
		} 
		
	}

	function closePopUp() {
		if (popUpButton.classList.contains('popup-content__x-button--show')) {
			popUpButton.classList.toggle('popup-content__x-button--show');
			popUpButton.classList.toggle('popup-content__x-button--hide');
			console.log('hide');
		}
	}

	popUpButton.addEventListener('click', openPopUp);
	popUpButton.addEventListener('click', closePopUp);
}