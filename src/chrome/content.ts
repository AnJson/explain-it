// Listen for selectionchange event
document.addEventListener('selectionchange', () => {
  // Get the selected text
  const selectedText = window.getSelection()?.toString()
  console.log('Selected text----------------')
  console.log(selectedText)
  console.log('-----------------------------')

  // Send a message to the background script with the selected text
  chrome.runtime.sendMessage({
    type: 'selectionchange',
    text: selectedText
  })
})
