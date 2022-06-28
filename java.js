
/* Java Script Funktion.
    Die Funktion "openNav()" wird ausgeführt, wenn man auf den Hamburger (☰) klickt, die Funktion verändert die Breite von der id "#hamburgernav" im CSS auf 100%.
    Die Funktion "closeNav()" wird ausgeführt, wenn man auf das Close-Icon (x) klickt, die Funktion verändert die Breite von der id "#hamburgernav" im CSS auf 0%.
*/

var hamNav = document.getElementById("hamNav");
var hamIcon = document.getElementById("hamIcon");
    function openNav() {
          
          if (hamIcon.innerHTML == "☰")
          {
          hamNav.style.width = "100vw";
          hamIcon.innerHTML = "×";
        }
          else
          {
          hamNav.style.width = "0vw";
          hamIcon.innerHTML = "☰";
        }
      }

    $('#carouselFade').carousel();