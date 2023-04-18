import { CommandError } from './error/CommandError';
import { Command } from './data/Command';

chrome.commands.onCommand.addListener(async (command) => {
	console.log('コマンド', command, 'を実行します');

	const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
	if(!tabs.length) { return; }

	try {
		const res = await chrome.tabs.sendMessage(tabs[0].id!, { command } as Command);
		console.log('res', res);
	} catch (error) {
		console.debug(new CommandError(error instanceof Error ? error.message : JSON.stringify(error)));
	}
});
