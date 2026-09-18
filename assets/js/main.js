/* Main JS file */

/* Popup Window for Portfolio Items: */
if (document.querySelector('.popup-bg-wrapper')) {
	/* 1. Variables: */

	// navigation
	let popUpWrapper = document.querySelector('.popup-bg-wrapper');
	let xButton = document.querySelector('.popup-content__x-button');

	// content of item
	let modalImageWrapper = document.querySelector('.popup-item__carousel-wrapper');
	let modalItemName = document.querySelector('.popup-item__name');
	let modalMetadata = document.querySelector('.popup-item__metadata');
	let modalContent = document.querySelector('.popup-item__content');

	// items in portfolio
	let portfolioItems = document.querySelectorAll('.portfolio__metadata-wrapper');

	/* 2. Functions: */

	// hide popup w/ X button
	function hidePopUp() {
		popUpWrapper.style.display = "none";
		let imageList = document.querySelector('.popup-item__carousel-viewport');
		imageList.innerHTML = "";
	}

	// hide popup w/ background outside modal
	function hideByBackground() {
		if (event.target == popUpWrapper) {
			popUpWrapper.style.display = "none";
			let imageList = document.querySelector('.popup-item__carousel-viewport');
			imageList.innerHTML = "";
		}
	}

	// show popup & navigate popup arrows
	function clickPortfolioItem() {
		popUpWrapper.style.display = "flex";

		/* Popup Content: */

		// title
		let itemName = this.children[1];
		modalItemName.textContent = itemName.textContent;

		// clay & years
		let itemDetails = this.children[2];
		modalMetadata.innerHTML = itemDetails.innerHTML;

		// description
		let itemContent = this.children[3];
		modalContent.textContent = itemContent.textContent;

		// images
		let carouselWrapper = this.children[0];
		let carouselViewport = carouselWrapper.children[2];
		let imageList = document.querySelector('.popup-item__carousel-viewport');
		imageList.innerHTML = carouselViewport.innerHTML;

		/* Popup Navigation: */

		// variables:
		let rightArrow = document.querySelector('.popup-nav-right');
		let leftArrow = document.querySelector('.popup-nav-left');
		let viewport = document.querySelector('.popup-item__carousel-viewport');
		let num = viewport.childElementCount;
		let viewportContentsWidth = viewport.scrollWidth;
		let translateNum = viewportContentsWidth / num;	

		// functions:
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

		// navigation event listeners:
		rightArrow.addEventListener('click', toTheEnd);
		leftArrow.addEventListener('click', toTheStart);
		rightArrow.addEventListener('touchstart', toTheEnd);
		leftArrow.addEventListener('touchstart', toTheStart);
	}

	/* 3. Event Listeners: */

	// popup comes up on click
	for (let item of portfolioItems) {
		item.addEventListener('click', clickPortfolioItem);
	}

	// popup closes on clicking X or background outside of modal
	xButton.addEventListener('click', hidePopUp);
	popUpWrapper.addEventListener('click', hideByBackground);
} // end popup code