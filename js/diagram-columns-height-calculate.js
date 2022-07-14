'use strict'

let diagrams = document.querySelectorAll('.diagram-section');

for (let k = 0; k < diagrams.length; ++k) {

	let columnInitialHeight = window.getComputedStyle(diagrams[k].querySelector('.diagram-item__diagram-body-column'), null).height;
	columnInitialHeight = (Number(columnInitialHeight.replace('px', '')));
	//console.log(columnInitialHeight);

	let columnInitialHeightIndexs = diagrams[k].querySelectorAll('.diagram-item__vertical-number');
	let columnInitialHeightArray = [];
	for (let i of columnInitialHeightIndexs) {
		columnInitialHeightArray.push(Number((i.textContent)))
	}
	//console.log(columnInitialHeightIndexs);
	//console.log(columnInitialHeightArray);

	let maxColumnInitialHeightIndex = columnInitialHeightArray[0];
	for (let i = 0; i < columnInitialHeightArray.length; ++i) {
		if (columnInitialHeightArray[i] > maxColumnInitialHeightIndex) {
			maxColumnInitialHeightIndex = columnInitialHeightArray[i];
		}
	}

	let columns = diagrams[k].querySelectorAll('.diagram-item__diagram-body-column-value');
	//console.log(columns);

	let columnsValues = [];
	for (let i of columns) {
		let temp = Number((i.textContent).replace(',', '.').replace('%', ''));
		columnsValues.push(temp);
	}
	//console.log(columnsValues);

	let columnDesiredHeights = [];

	for (let i = 0; i < columnsValues.length; ++i) {
		columnDesiredHeights.push(Math.round((columnInitialHeight * columnsValues[i]) / maxColumnInitialHeightIndex));
	}
	//console.log(columnDesiredHeights);

	let columnInitialHeights = diagrams[k].querySelectorAll('.diagram-item__diagram-body-column');
	//console.log(columnInitialHeights);
	let j = 0;
	for (let element of columnInitialHeights) {
		//console.log(columnDesiredHeights[j] + 'px');
		element.style.height = columnDesiredHeights[j] + 'px';
		++j;
	}
}