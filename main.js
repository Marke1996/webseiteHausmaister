const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
})

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 4) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
})


// Funktion, die bei Klick auf die Telefonnummer aufgerufen wird
function copyOrCallPhoneNumber() {
  // Holen Sie sich den Text der Telefonnummer
  var phoneNumber = document.getElementById("phoneNum").innerText;

  // Versuchen, einen Anruf zu starten (nur auf mobilen Geräten möglich)
  window.location.href = "tel:" + phoneNumber;

  // Erstellen Sie ein unsichtbares Textfeld, um den Text zu kopieren
  var tempInput = document.createElement("input");
  tempInput.type = "text";
  tempInput.value = phoneNumber;
  document.body.appendChild(tempInput);

  // Markieren Sie den Text im Textfeld
  tempInput.select();

  // Kopieren Sie den markierten Text
  document.execCommand("copy");

  // Entfernen Sie das unsichtbare Textfeld
  document.body.removeChild(tempInput);

  // Zeigen Sie eine Bestätigungsnachricht an (optional)
  alert("Telefonnummer kopiert: " + phoneNumber);
}

// Eventlistener, der die Funktion copyOrCallPhoneNumber aufruft, wenn auf die Telefonnummer geklickt wird
document.getElementById("phoneNum").addEventListener("click", copyOrCallPhoneNumber);

