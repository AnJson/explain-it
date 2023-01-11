// Listen for selectionchange event
document.addEventListener('selectionchange', (event) => {
  console.log(event)
  // Get the selected text
  const selectedText = window.getSelection()?.toString()

  // Send a message to the background script with the selected text
  chrome.runtime.sendMessage({
    type: 'selectionchange',
    selectedText
  })
})
