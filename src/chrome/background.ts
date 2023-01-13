/* chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.executeScript(activeInfo.tabId, { file: 'content.js' })
}) */

/* chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === 'complete') {
    chrome.tabs.executeScript(tabId, {
      file: 'content.js'
    })
  }
}) */

chrome.tabs.onUpdated.addListener((tabId) => {
  chrome.tabs.executeScript(tabId, {
    file: 'content.js'
  })
})
