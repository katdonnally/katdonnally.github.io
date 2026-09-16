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
	// popup navigation
	let portfolioItem = document.querySelector('.popup-dummy-wrapper');
	let popUpWrapper = document.querySelector('.popup-bg-wrapper');
	let xButton = document.querySelector('.popup-content__x-button');

	// portfolio target content
	let portfolioImageWrapper = document.querySelector('.dummy-item__image-wrapper');
	let portfolioItemName = document.querySelector('.dummy-item__name');
	let portfolioMetadata = document.querySelector('.dummy-item__metadata');
	let portfolioContent = document.querySelector('.dummy-item__content');

	// popup content
	let modalImageWrapper = document.querySelector('.popup-item__image-wrapper');
	let modalItemName = document.querySelector('.popup-item__name');
	let modalMetadata = document.querySelector('.popup-item__metadata');
	let modalContent = document.querySelector('.popup-item__content');

	// image
	let portfolioImage = portfolioImageWrapper.children[0];
	let imageClone = portfolioImage.cloneNode(); // so appendChild doesn't steal it

	function displayPopUp() {
		popUpWrapper.style.display = "flex";
		modalImageWrapper.appendChild(imageClone);
		modalItemName.textContent = portfolioItemName.textContent;
		modalMetadata.innerHTML = portfolioMetadata.innerHTML;
		modalContent.innerHTML = portfolioContent.innerHTML;

	}

	function hidePopUp() {
		popUpWrapper.style.display = "none";
		modalItemName.textContent = "";
	}

	portfolioItem.addEventListener('click', displayPopUp);
	xButton.addEventListener('click', hidePopUp);
}