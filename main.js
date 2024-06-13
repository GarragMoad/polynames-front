import { CreateJoinPartie } from "./view/CreateJoinPartieView.js";
window.addEventListener("load", function () {
    window.displayCreateJoinPartie = displayCreateJoinPartie
  });


function displayCreateJoinPartie() {
  const createJoinPartie = new CreateJoinPartie();
  createJoinPartie.displayPageHtml();   
}

