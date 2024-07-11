chrome.action.onClicked.addListener(async (tab) => {
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        console.log("Audio stream captured successfully.")
        chrome.action.setIcon({ path: "/icons/recording.png" });
    })
    .catch(err => {
        console.log(`Error accessing mic: ${err}`);

    })
});