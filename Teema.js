/*ChatGPT õpetas*/

document.addEventListener('DOMContentLoaded', function () {
    const teemanupp = document.getElementById('TeemaNupp');
    /*const teemastiil = document.getElementById('teema-style');*/
    const kehaelement = document.body;

    const susteemiteema = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set the initial theme based on system preference
    if (susteemiteema) {
        /*teemastiil.href = 'tume-teema-style.css';*/
        kehaelement.classList.add('tume-teema');
        teemanupp.checked = true;
    } else {
        /*teemastiil.href = 'hele-teema-style.css';*/
        kehaelement.classList.add('hele-teema');
        teemanupp.checked = false;
    }

    teemanupp.addEventListener('change', function () {
        if (teemanupp.checked) {
            // If checkbox is checked, enable tume-teema-style.css and disable hele-teema-style.css
            /*teemastiil.href = 'tume-teema-style.css';*/
            kehaelement.classList.add('tume-teema')
            kehaelement.classList.remove('hele-teema')
        } else {
            // If checkbox is unchecked, enable hele-teema-style.css and disable tume-teema-style.css
            /*teemastiil.href = 'hele-teema-style.css';*/
            kehaelement.classList.remove('tume-teema')
            kehaelement.classList.add('hele-teema')
        }
    });
});
