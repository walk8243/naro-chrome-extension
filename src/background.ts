import { CommandError } from './error/CommandError';
import { Command } from './data/Command';

chrome.commands.onCommand.addListener((command) => {
	console.log('コマンド', command, 'を実行します');

	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		if(!tabs.length) { return; }
		chrome.tabs.sendMessage(tabs[0].id!, { command } as Command, (res) => {
			if(chrome.runtime.lastError) {
				console.debug(new CommandError(chrome.runtime.lastError.message));
                return;
            }
			console.log('res', res);
		});
	});
});
