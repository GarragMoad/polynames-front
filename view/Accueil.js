export class AccueilView{
    constructor() {
      }
    displayPageHtml() {
        console.log("Accueil");
        const accueil = document.getElementById("Accueil");
        const createJoinPartie=document.getElementById("CreateJoinPartie");
        const cards=document.getElementById("Accueil");
        cards.style.display = "none";
        createJoinPartie.style.display = "none";
        accueil.innerHTML= `
        <div class="background-image"></div>
    <div class="header-container">
        <div class="header">
            <img src="pictures/logo.png" alt="Header Image" class="header-image">
            <h1 class="main-title">Beat your friends and prove you are the best!</h1>
        </div>
        <div class="button-container">
                <button class="button" role="button" onclick="displayCreateJoinPartie()" >Start Playing</button>
        </div>
    </div>

    <div class="content-wrapper">
        <div class="left-agent">
            <img src="pictures/man.png" alt="Left Agent" class="agent-image">
        </div>
        <div class="rules">
            <h2>Règles du jeu</h2>
            <ol class="rule-list">
                <li>Cliquez sur le bouton CRÉER UNE PARTIE.</li>
                <li>Choisissez vos rôles (Maître des mots ou Maître de l'intuition) ou laissez le jeu les attribuer
                    aléatoirement.</li>
                <li>Utilisez votre chat audio ou vidéo préféré pour communiquer.</li>
                <li>Copiez le code unique de la salle et partagez-le avec vos amis pour qu'ils rejoignent la partie.
                </li>
                <li>Donnez des indices, devinez les mots et profitez du jeu !</li>
            </ol>
        </div>
        <div class="right-agent">
            <img src="pictures/women 2.png" alt="Right Agent" class="agent-image">
        </div>
        `;
        
    }

}