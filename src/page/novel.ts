import { Command } from '../data/Command';
import { Novel } from '../module/Novel';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.debug('chrome.runtime.onMessage', request);
	const command: Command = request;
	let isExec: boolean = false;
	if(command.command === 'next-page') {
		const btn = Novel.getNextPageBtn();
		if(btn) {
			btn.click();
		}
		isExec = true;
	} else if(command.command === 'prev-page') {
		const btn = Novel.getPrevPageBtn();
		if(btn) {
			btn.click();
		}
		isExec = true;
	}
	sendResponse({ script: 'novel', isExec });
});
