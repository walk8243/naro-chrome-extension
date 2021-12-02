import { CommandError } from './error/CommandError';

chrome.commands.onCommand.addListener((command) => {
	console.log(`Command "${command}" triggered`);

	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		if(!tabs.length) { return; }
		chrome.tabs.sendMessage(tabs[0].id!, { command }, (res) => {
			if(chrome.runtime.lastError) {
				console.debug(new CommandError(chrome.runtime.lastError.message));
                return;
            }
			console.log('res', res);
		});
	});
});
