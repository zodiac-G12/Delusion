function draw() {
    whichDraw(true);
}

function undraw() {
    whichDraw(false);
}

function whichDraw(bool) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            draw: bool
        });
    });
}

function init(){
    whichDraw();
    // alert('changed!');
    // document.onclick = function(e) {
    //     console.log(e)
    // }
    // document.getElementById('delusion-action-button-draw').onclick = draw();
}

window.addEventListener("DOMContentLoaded", init);

// document.getElementById('delusion-action-button-undraw').onclick = undraw();
