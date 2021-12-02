import { Command } from './data/Command';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('chrome.runtime.onMessage', request);
	const command: Command = request;
	let isExec: boolean = false;
	if(command.command === 'next-page') {
		const btn = document.getElementById('novel_color')?.getElementsByClassName('novel_bn')[0]?.getElementsByTagName('a')[1];
		if(btn) {
			btn.click();
		}
		isExec = true;
	} else if(command.command === 'prev-page') {
		const btn = document.getElementById('novel_color')?.getElementsByClassName('novel_bn')[0]?.getElementsByTagName('a')[0];
		if(btn) {
			btn.click();
		}
		isExec = true;
	}
	sendResponse({ script: 'novel', isExec });
});
