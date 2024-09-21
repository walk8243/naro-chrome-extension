export class Novel {
	private pager?: Element;

	constructor() {
		const area = document.getElementsByClassName('p-novel')[0];
		this.pager = area?.getElementsByClassName('c-pager')[0];
	}

	goToNextPage() {
		if(!this.pager) { return; }
		const next = this.pager.getElementsByClassName('c-pager__item--next')[0];
		if(next) {
			(next as HTMLAnchorElement).click()
		}
	}

	goToPrevPage() {
		if(!this.pager) { return; }
		const next = this.pager.getElementsByClassName('c-pager__item--before')[0];
		if(next) {
			(next as HTMLAnchorElement).click()
		}
	}
}
