// Main JS file

// left and right buttons on image carousels
if (document.querySelector('.portfolio-wrapper') || document.querySelector('.popup-wrapper')) {
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
	let popUpWrapper = document.querySelector('.popup-bg-wrapper');
	let xButton = document.querySelector('.popup-content__x-button');

	// popup content
	let modalImageWrapper = document.querySelector('.popup-item__image-wrapper');
	let modalItemName = document.querySelector('.popup-item__name');
	let modalMetadata = document.querySelector('.popup-item__metadata');
	let modalContent = document.querySelector('.popup-item__content');

	let portfolioRealItems = document.querySelectorAll('.portfolio__metadata-wrapper');

	function hidePopUp() {
		popUpWrapper.style.display = "none";
		modalItemName.textContent = "";

		let imageList = document.querySelector('.popup-item__image-list');
		imageList.innerHTML = "";
	}

	function clickRealItem() {
		popUpWrapper.style.display = "flex";

		let itemName = this.children[1];
		modalItemName.textContent = itemName.textContent;

		let itemDetails = this.children[2];
		modalMetadata.innerHTML = itemDetails.innerHTML;

		let itemContent = this.children[3];
		modalContent.textContent = itemContent.textContent;

		// images
		let carouselWrapper = this.children[0];
		console.log(carouselWrapper);
		modalImageWrapper.innerHTML = carouselWrapper.innerHTML;
	}

	for (let item of portfolioRealItems) {
		item.addEventListener('click', clickRealItem);
	}

	xButton.addEventListener('click', hidePopUp);
}

