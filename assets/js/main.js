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

		function testing() {
			alert("Yes, this is with touch");
		}

		rightArrows[i].addEventListener('click', toTheEnd);
		leftArrows[i].addEventListener('click', toTheStart);
		// mobile
		rightArrows[i].addEventListener('touchstart', toTheEnd);
		leftArrows[i].addEventListener('touchstart', toTheStart);

		rightArrows[i].addEventListener('touchstart', testing);
	}
}