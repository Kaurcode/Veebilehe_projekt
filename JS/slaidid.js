
/* ChatGPT õpetas */

let slaidNr = 0; /* Praeguse slaidi indeks */

function slaidiseanss() {
    let slaidid = document.getElementsByClassName("slaid"); /* Võtab kõik elemendid, mille klass on "slaid" */
    for (let i = 0; i < slaidid.length; i++) {
        slaidid[i].style.opacity = 0; /* Määrab iga slaidi läbipaistvuse nulliks (nähtamatuks) */
    }
    if (slaidNr >= slaidid.length) {
        slaidNr = 0; /* Kui praeguse slaidid indeks on suurem kui/võrdne slaidide arvuga, siis praeguse slaidi indeks muudetakse tagasi nulliks (ehk pärast viimast slaidi tuleb uuesti esimene slaid) */
    }
    slaidid[slaidNr].style.opacity = 1; /* Praeguse slaidi indeksil olev slaid muudetakse nähtavaks (läbipaistvus = 1) */
    slaidNr++ /* Praeguse slaidi indeks ühe võrra üles */
    setTimeout(slaidiseanss, 5000); /* 5 sekundit ooteaega */
}

document.addEventListener("DOMContentLoaded", function() {
    slaidiseanss(); /* Kui HTML kood on laetud, siis kutsutakse välja funkstioon slaidiseanss() */
});