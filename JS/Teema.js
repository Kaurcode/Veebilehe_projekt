/*ChatGPT õpetas*/

document.addEventListener('DOMContentLoaded', function () { /* Kutsutakse välja siis, kui HTML on laetud */
    const teemanupp = document.getElementById('TeemaNupp'); /* Võtab elemendi, mille ID on "TeemaNupp" */
    /*const teemastiil = document.getElementById('teema-style');*/
    const kehaelement = document.body; /* Võtab kehaelemendi (ehk HTML elemend "body") */
    const susteemiteema = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; /* Vaatab, mis on praegune süsteemiteema */


    if (susteemiteema) {
        /*teemastiil.href = 'tume-teema-style.css';*/
        teemanupp.checked = true; /* Kui praegune süsteemiteema on tume teema, siis nupp on juba valikus "True" */
    } else { /* Kui praegune süsteemiteema on hele, siis... */
        /*teemastiil.href = 'hele-teema-style.css';*/
        kehaelement.classList.add('hele-teema'); /* Kehaelemendile lisatakse klass "hele-teema" */
        kehaelement.classList.remove('tume-teema') /* Kehaelemendilt võetakse ära klass "tume-teema" */
        teemanupp.checked = false; /* Nupp on valikus "false" */
    }

    teemanupp.addEventListener('change', function () { /* Jälgib, kas teemanupu olek muutub */
        if (teemanupp.checked) { /* Kui teemanupp on valitud, siis lisatakse kehaelemendile klass "tume-teema" ning võetakse ära "hele-teema" */
            /*teemastiil.href = 'tume-teema-style.css';*/
            kehaelement.classList.add('tume-teema')
            kehaelement.classList.remove('hele-teema')
        } else { /* Kui teemanupp on valimata, siis lisatakse kehaelemendile klass "hele-teema" ning võetakse ära klass "tume-teema" */
            /*teemastiil.href = 'hele-teema-style.css';*/
            kehaelement.classList.remove('tume-teema')
            kehaelement.classList.add('hele-teema')
        }
    });
});
