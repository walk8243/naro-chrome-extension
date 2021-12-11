export class Novel {
	static getPrevPageBtn() {
		if(Novel.isFirstPage()) {
			return null;
		} else {
			return Novel.getPaginationArea()?.getElementsByTagName('a')[0];
		}
	}

	static getNextPageBtn() {
		if(Novel.isFirstPage()) {
			return Novel.getPaginationArea()?.getElementsByTagName('a')[0];
		} else if(Novel.isLastPage()) {
			return null;
		} else {
			return Novel.getPaginationArea()?.getElementsByTagName('a')[1];
		}
	}

	static isFirstPage() {
		const page = Novel.getPageArea()?.innerText.split('/');
		if(!page || page.length !== 2) {
			return false;
		}
		return page[0] === '1';
	}

	static isLastPage() {
		const page = Novel.getPageArea()?.innerText.split('/');
		if(!page || page.length !== 2) {
			return false;
		}
		return page[0] === page[1];
	}

	private static getPaginationArea() {
		return document.getElementById('novel_color')?.getElementsByClassName('novel_bn')[0];
	}

	private static getPageArea() {
		return document.getElementById('novel_no');
	}
}
