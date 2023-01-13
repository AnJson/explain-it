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

function injectContentScript(status: string | undefined, tabId: number) {
  if (status === 'complete') {
    chrome.scripting.executeScript({
      target: {
        tabId,
        allFrames: true
      },
      files: ['./static/js/content.js']
    })
  } else {
    setTimeout(() => {
      injectContentScript(status, tabId)
    }, 200)
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  injectContentScript(changeInfo.status, tabId)
})
