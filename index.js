/* Definerer IDs til iFrames */
let HjemSide = document.getElementById('HjemID')
let ProsjektSide = document.getElementById('ProsjektID')
let OmSide = document.getElementById('OmID')
let KontaktSide = document.getElementById('KontaktID')
let FotoSide = document.getElementById('FotosideID') 

/* Funksjoner som endrer hvilken side som er vist */
function endreTilHjem() {
    /* Fjerner attributen hidden fra iFramen til hjemme siden. Dette gjør den synlig */
    HjemSide.removeAttribute("hidden");
    /* Gir attributen hidden til iFramen som er ansvarlig for prosjekt siden, om meg siden og kontakt meg siden. */
    ProsjektSide.setAttribute("hidden", true);
    OmSide.setAttribute("hidden", true);
    KontaktSide.setAttribute("hidden", true);
    FotoSide.setAttribute("hidden", true);
}
function endreTilProsjekter() {
    HjemSide.setAttribute("hidden", true);
    ProsjektSide.removeAttribute("hidden");
    OmSide.setAttribute("hidden", true);
    KontaktSide.setAttribute("hidden", true);
    FotoSide.setAttribute("hidden", true);
}
function endreTilOmMeg() {
    HjemSide.setAttribute("hidden", true);
    ProsjektSide.setAttribute("hidden", true);
    OmSide.removeAttribute("hidden");
    KontaktSide.setAttribute("hidden", true);
    FotoSide.setAttribute("hidden", true);
}
function endreTilKontaktMeg() {
    HjemSide.setAttribute("hidden", true);
    ProsjektSide.setAttribute("hidden", true);
    OmSide.setAttribute("hidden", true);
    KontaktSide.removeAttribute("hidden");
    FotoSide.setAttribute("hidden", true);
}
function endreTilFotoside() {
    HjemSide.setAttribute("hidden", true);
    ProsjektSide.setAttribute("hidden", true);
    OmSide.setAttribute("hidden", true);
    KontaktSide.setAttribute("hidden", true);
    FotoSide.removeAttribute("hidden");
}