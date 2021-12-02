console.log('naro-chrome-extension');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('chrome.runtime.onMessage', request);
	sendResponse({ script: 'novel' });
});
