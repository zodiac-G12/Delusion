window.onload = function() {
    // return createDiv();
}

function createDiv () {
    const div = document.createElement("div");
    div.setAttribute("id", "delusion-center-border-grid-1987");
    document.body.appendChild(div);
    alert('drawed!');
}

function isExistDelusion () {
    return document.getElementById("delusion-center-border-grid-1987");
}

chrome.runtime.onMessage.addListener(function(msg) {
    console.log(msg)
    const div = isExistDelusion();
    // if (div && msg.draw) return;
    // if (!div && !msg.draw) return;

    console.log(div);

    // if (!msg.draw && flag) {
    if (!div) {
        return createDiv();
    } else {
        div.remove();
        alert('undrawed!');
        return;
    }
});
