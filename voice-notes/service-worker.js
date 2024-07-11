// chrome.runtime.onInstalled.addListener((details) => {
//   console.log(`Extension installed...`);
//   console.log(details);
//   console.log(details.reason.search(/install/g));
//   if (details.reason.search(/install/g) === -1) {
//     console.log(`what's happening??`);
//     return;
//   }
//   console.log(`what's happening??`);
//   chrome.tabs.create({
//     url: chrome.runtime.getURL("welcome.html"),
//     active: true,
//   });
//   console.log(`Tab created...`);
// });

chrome.action.onClicked.addListener(async (tab) => {
  try{
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id; // Get ID of the active tab      
      chrome.tabs.sendMessage(
        activeTabId,
        "recording-started",
      );
    });
  } catch(error) {
    console.log(error);
  }
});

