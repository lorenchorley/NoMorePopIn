
// Setup context menu
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'console.log("clicked");'
  });
});