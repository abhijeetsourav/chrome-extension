const recordBtn = document.getElementById("record-btn");

// Function to handle recording logic (replace with your actual recording implementation)
function startRecording() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id; // Get ID of the active tab
    chrome.tabs.sendMessage(activeTabId, "recording-started");
  });
  recordBtn.innerText = "Recording...";
  recordBtn.style.backgroundColor = 'green';
}

recordBtn.addEventListener("click", startRecording);
