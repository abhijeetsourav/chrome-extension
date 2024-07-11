console.log("content.js loaded...");

// Function to create and display the popup
function createPopup() {
  const popup = document.createElement("div");
  popup.id = "popup";
  popup.style = `position: absolute; z-index: 999; background-color: black;`;

  const recordBtn = document.createElement("button");
  recordBtn.id = "record-btn";
  recordBtn.innerText = "Start Recording"
  recordBtn.style = `background-color: red;`;
  popup.appendChild(recordBtn);

  const para = document.createElement("p");
  para.id = 'status-para';
  para.style.color = 'white';
  popup.appendChild(para);

  recordBtn.addEventListener('click', () => {
    const btns = document.querySelectorAll(".R5ccN");
    const para = document.getElementById('status-para');
    const recordBtn = document.getElementById('record-btn');

    console.log(btns.length);

    if (Boolean(btns.length)){
      const micBtn = btns[0].querySelector('[jscontroller="soHxf"]');
      para.innerText = "";
      recordBtn.style.backgroundColor = "green";
      recordBtn.innerText = "Recording...";
      
      micBtn.addEventListener('click', () => {
        const isMicMuted = micBtn.getAttribute('data-is-muted');
        console.log(isMicMuted);
        // if (isMicMuted === "false"){
        //   para.innerText = "mic turned on in gmeet!!!";
        
        // }else {

        // }
      });
    }else{
      para.innerText = "meeting has not started yet!!!";
    }
  });
  
  document.body.appendChild(popup);
}

createPopup();



function accessMic(){
  const btns = document.querySelectorAll(".R5ccN");

  const micBtn = btns[0].querySelector('[jscontroller="soHxf"]');
  micBtn.addEventListener('click', () => {
    console.log('Mic turned on in Gmeet!!!');
  })
}

// chrome.action.onClicked.addListener(async (tab) => {
//     if (Boolean(btns.length)) {
//       console.log(`length of btns array-- ${btns.length}`);

//       const btn_span = btns[0].querySelectorAll("span")[0];
//       console.log(btn_span);

//       const micBtn = btn_span.querySelectorAll("button")[0];
//       console.log(micBtn);
//       chrome.action.setIcon({ path: "/icons/recording.png" });
//     } else {
//         alert('start the meeting first!!!');
//     }
// });

// chrome.runtime.onMessage.addListener(async (message) => {
//   const btns = document.querySelectorAll(".R5ccN");

//   const micBtn = btns[0].querySelector('[jscontroller="soHxf"]');
//  if (message === "recording-started") {
//   accessMic();
//  }
// });