console.log('Im injected / Contents.js')
function sendSelectionChanged() {
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
}

// Clean listeners.
document.removeEventListener('selectionchange', sendSelectionChanged)
// Listen for selectionchange event.
document.addEventListener('selectionchange', sendSelectionChanged)
