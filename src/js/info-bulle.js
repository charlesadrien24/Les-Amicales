let isMaintenance = document.getElementById("info-bulle-maintenance").getAttribute("data-activation");
let isUpdate = document.getElementById("info-bulle-version").getAttribute("data-activation");


document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.href;

    if (url.includes("amicales-rsk.vlamynck.fr") || url.includes("amicales.birds-audiovisuel.fr") || url.includes("http://localhost:63342/")) {
        document.getElementById("info-bulle-adresse").style.display = "block";
    }

    if ((url.includes("les-amicales.fr")|| url.includes("http://localhost:63342/"))&& isUpdate){
        document.getElementById("info-bulle-version").style.display = "block";
    }

    if ((url.includes("les-amicales.fr") || url.includes("http://localhost:63342/")) && isMaintenance) {
        document.getElementById("info-bulle-maintenance").style.display = "block";
    }
});

function closeInfoBulle(id) {
    document.getElementById("info-bulle-" + id).style.display = "none";
}




//  || url.includes("http://localhost:63342/Les-Amicales/")
/**document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.href;
    if (url.includes("amicales-rsk.vlamynck.fr") || url.includes("amicales.birds-audiovisuel.fr") || url.includes("http://localhost:63342/Les-Amicales/")) {
        document.getElementById("info-bulle").style.display = "block";
    }
});

function closeInfoBulle() {
    document.getElementById("info-bulle").style.display = "none";
}
*/