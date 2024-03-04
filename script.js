document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is geladen!");
    
    var cookieBanner = document.getElementById("cookie-banner");
    var acceptButton = document.getElementById("accept-cookies");

    // Controleer of de cookie-banner eerder is geaccepteerd
    if (!localStorage.getItem("cookiesAccepted")) {
        // Als niet geaccepteerd, toon de banner
        console.log("Cookies zijn nog niet geaccepteerd. Cookie-banner wordt weergegeven.");
        cookieBanner.style.display = "block";
    } else {
        console.log("Cookies zijn al geaccepteerd. Cookie-banner wordt verborgen.");
    }

    // Voeg een eventlistener toe aan de accepteer-knop
    acceptButton.addEventListener("click", function () {
        console.log("Cookies zijn geaccepteerd. Cookie-banner wordt verborgen.");
        // Verberg de banner
        cookieBanner.style.display = "none";
        // Sla op dat de cookies zijn geaccepteerd
        localStorage.setItem("cookiesAccepted", "true");
    });
});





    
    
    
    


