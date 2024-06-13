import { CreatePartieService } from "./../service/createPartieService.js";
import { JoinPartieService } from "./../service/JoinPartieService.js";
import { CardView } from "./CardsView.js";
export class CreateJoinPartie {
    constructor() {
    }

    async CreatePartie(nom,selectedIndex) {
        const result= await CreatePartieService.CreatePartie(nom,selectedIndex);
        return result;
    }

    async JoinPartie(nom, code) {
        const result= await JoinPartieService.joinPartie(nom,code);
        return result;
    }

      displayPageHtml() {
        const createJoinPartie=document.getElementById("CreateJoinPartie");
        const accueil = document.getElementById("Accueil");
        accueil.style.display = "none";
        createJoinPartie.innerHTML= `
            <div class="container" id="container">
        <div class="form-container Create-game-container">
            <form action="#">
                <h1>Créer une partie</h1>
                <div class="input-section">
                    <label for="name">Entrez votre nom:</label>
                    <input type="text" id="name" name="name" placeholder="Entrez votre nom">
                </div>
                <div class="role-section">
                    <label for="role">Choisir un rôle:</label>
                    <select id="role" name="role">
                        <option value="aleatoire" selected>Aléatoire</option>
                        <option value="maitre-mot">Maître de mot</option>
                        <option value="maitre-intuition">Maître de l'intuition</option>
                    </select>
                </div>
                <button id="create-game-button">Créer une partie</button>
            </form>
        </div>
        <div class="form-container Join-game-container">
            <form action="#">
                <h1>Rejoindre une partie</h1>
                <div class="input-section">
                    <label for="join-name">Entrez votre nom:</label>
                    <input type="text" id="join-name" name="join-name" placeholder="Entrez votre nom">
                </div>
                <div class="code-section">
                    <label for="game-code">Entrez le code du jeu:</label>
                    <input type="text" id="game-code" name="game-code" placeholder="Entrez le code du jeu">
                </div>
                <button id="join-game-button">Rejoindre une partie</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Prêt à jouer?</h1>
                    <p>Pour rejoindre une partie, entrez votre nom et le code du jeu.</p>
                    <button class="ghost" id="RejoindrePartie">Rejoindre une partie</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Bienvenue!</h1>
                    <p>Pour créer une nouvelle partie, entrez vos informations personnelles.</p>
                    <button class="ghost" id="CreePartie">Créer une partie</button>
                </div>
            </div>
        </div>
    `;
    const CreePartie = document.getElementById('CreePartie');
    const RejoindrePartie = document.getElementById('RejoindrePartie');
    const container = document.getElementById('container');
    CreePartie.onclick = function() {
        container.classList.add('right-panel-active');
    };
    
    // For switching between sign-up and sign-in forms
    CreePartie.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    RejoindrePartie.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

        // For the "Créer une partie" button
    const createGameButton = document.getElementById('create-game-button');
    createGameButton.addEventListener('click', async () => {
        
        event.preventDefault(); // Prevent page reload
        const nom=document.getElementById("name").value;
        const selectElement = document.getElementById('role');
        const selectedIndex = selectElement.selectedIndex;
        const data = await this.CreatePartie(nom, selectedIndex);
        const cardView = new CardView(data);
        cardView.displayPageHtml();

      });

       // For the "Créer une partie" button
    const JoinGameButton = document.getElementById('join-game-button');
    JoinGameButton.addEventListener('click', async () => {
        
        event.preventDefault(); // Prevent page reload
        const nom=document.getElementById("join-name").value;
        const code = document.getElementById('game-code').value;
        localStorage.setItem("nom",nom);
        const data = await this.JoinPartie(nom, code);
        localStorage.setItem("code",data.code);
        localStorage.setItem("cartes",data.cartes);
        localStorage.setItem("role",data.role);
        const cardView = new CardView(data);
        cardView.displayPageHtml();

      });
        
    }


    
}