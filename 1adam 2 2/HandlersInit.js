// event handlers

function handleSpinButton() {
    alert("WORKING")
    controller.handleSpin();
}

// init - called when the page has completed loading

window.onload = init;

function init() {
    // Spin button onclick handler
    var spinButton = document.getElementById("spinBtn");
    spinButton.onclick = handleSpinButton;
}