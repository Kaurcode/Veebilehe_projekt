
/* ChatGPT õpetas */

let slaidNr = 0;

function slaidiseanss() {
    let slaidid = document.getElementsByClassName("slaid");
    for (let i = 0; i < slaidid.length; i++) {
        slaidid[i].style.opacity = 0;
    }
    if (slaidNr >= slaidid.length) {
        slaidNr = 0;
    }
    slaidid[slaidNr].style.opacity = 1;
    slaidNr++
    setTimeout(slaidiseanss, 5000);
}

document.addEventListener("DOMContentLoaded", function() {
    slaidiseanss();
});