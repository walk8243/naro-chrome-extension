import { Command } from '../data/Command';
import { Novel } from '../module/Novel';

const novel = new Novel();
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.debug('chrome.runtime.onMessage', request);
	const command: Command = request;
	let isExec: boolean = false;
	if(command.command === 'next-page') {
		novel.goToNextPage();
		isExec = true;
	} else if(command.command === 'prev-page') {
		novel.goToPrevPage();
		isExec = true;
	}
	sendResponse({ script: 'novel', isExec });
});
