// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburgernya di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klick Di Luar Sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

var pdfViewer = document.getElementById("pdf-viewer");
pdfViewer.addEventListener("load", function () {
  var pdfDoc = pdfViewer.contentDocument || pdfViewer.contentWindow.document;
  var pdfPages = pdfDoc.getElementsByTagName("page");
  for (var i = 0; i < pdfPages.length; i++) {
    pdfPages[i].style.width = "100%";
  }
});
