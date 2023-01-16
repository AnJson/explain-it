import { injectContentScript } from '../utils/injectContentScript'

// ---------------------------------------------
// Inject scripts on tabs update.
// ---------------------------------------------
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  console.log('------- Change info --------')
  console.log(changeInfo)
  console.log('------- ----------- --------')
  injectContentScript(changeInfo.status, tabId)
})

// ---------------------------------------------
// Selection changed.
// ---------------------------------------------
chrome.runtime.onMessage.addListener((message) => {
  if (message.data === 'selectionchange') {
    // TODO: Set or delete currently selected text in storage for extension to use.
    // Use debounce in a suiting class.
  }
})
