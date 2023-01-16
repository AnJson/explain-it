export function injectContentScript(status: string | undefined, tabId: number) {
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
