const siteName = import.meta.env.VITE_SITE_NAME || "Moj IT status portal";

document.getElementById("site-title").innerText = siteName;

window.showMessage = function () {
  const message = document.getElementById("message");
  message.innerText = "Aplikacija deluje pravilno.";
};