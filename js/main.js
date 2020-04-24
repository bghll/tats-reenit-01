
// On demand installation of the app
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  console.log("Installable...");
  alert("Installable!!!");
  //showInstallPromotion();
});

menuInstall = () => {
  alert("asenna");
  // Hide the app provided install promotion
  //hideMyInstallPromotion();
 
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
  })
}

// Track if app somehow installed
window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs installed');
});

// Menu reset feature
menuReset = () => {
  alert("resetoi");
}

// Menu info feature
menuInfo = () => {
  alert("Versio 0.1");
}

// Load up and start SW script
window.onload = () => {  
    'use strict';     
    if ('serviceWorker' in navigator) {     
        navigator.serviceWorker.register('./sw.js'); 
    } 
}

// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
      
// Get today's date 
n =  new Date();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "(Tänään on "+ d + "." + m + ".)";
