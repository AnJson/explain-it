chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.executeScript(activeInfo.tabId, { file: 'content.js' })
})
