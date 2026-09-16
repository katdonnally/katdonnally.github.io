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
	let portfolioItem = document.querySelector('.popup-dummy-wrapper');
	let popUpWrapper = document.querySelector('.popup-bg-wrapper');
	let xButton = document.querySelector('.popup-content__x-button');

	function displayPopUp() {
		popUpWrapper.style.display = "flex";
	}

	function hidePopUp() {
		popUpWrapper.style.display = "none";
	}

	portfolioItem.addEventListener('click', displayPopUp);
	xButton.addEventListener('click', hidePopUp);
}