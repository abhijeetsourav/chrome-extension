function createPopup() {
  const popup = document.createElement("div");
  popup.id = "popup";
  popup.innerHTML = `<h2>Movable Popup</h2>
  <p>This is a movable popup window. Drag the header to move it.</p>
  <button id="close-btn">Close</button>`;

  document.body.appendChild(popup);

  // Offset variables for dragging
  let offsetX = 0;
  let offsetY = 0;

  const header = popup.querySelector("h2");

  header.addEventListener("mousedown", (event) => {
    offsetX = event.clientX - popup.offsetLeft;
    offsetY = event.clientY - popup.offsetTop;
    popup.style.cursor = "move"; // Change cursor to 'grabbing' on mousedown

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  function onMouseMove(event) {
    popup.style.left = event.clientX - offsetX + "px";
    popup.style.top = event.clientY - offsetY + "px";
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    popup.style.cursor = "default"; // Change cursor back to default on mouseup
  }

  const closeBtn = document.getElementById("close-btn");
  closeBtn.addEventListener("click", () => {
    popup.remove();
  });
}

// Call the function to create the popup (replace with your event trigger)
createPopup();
