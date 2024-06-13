
export class CardView{
    constructor(data) {
        this.data=data;  
        console.log("donnée reçu par cardView",data);
      }
    displayPageHtml() {
        const createJoinPartie=document.getElementById("CreateJoinPartie");
        const accueil = document.getElementById("Accueil");
        accueil.style.display = "none";
        createJoinPartie.style.display = "none";
        const cards=document.getElementById("cards");
        cards.innerHTML= `
            <div class="score-display">
            <span class="score-text">Score:</span>
            <span class="score-value">0</span>
        </div>
        <div>
            <fields>
            <card_parts> </card_parts>
            </fields>
        </div>
        <div class="custom-div">
            <input type="text" class="indice-input" placeholder="Enter word">
            <select class="number-selector" id="number-selector"></select>
            <button class="submit-button">Submit</button>
        </div>
            `;
        const cardsContainer=document.querySelector("card_parts");
        if (cardsContainer) {
            cardsContainer.innerHTML='';
            const code = this.data.code;
            const role = this.data.role;
            const cartes = this.data.cartes;
            
            // Parcourir les cartes
            cartes.forEach(carte => {
                const mot=carte.mot;
                const card=document.createElement("card");
                card.className='card';
                card.textContent=mot;
                console.log("couleur",carte.couleur);
                if(role=="Maitre de mots"){
                    switch(carte.couleur){
                        case "BLEU":
                            card.style.backgroundColor="blue";
                            break;
                        case "GRIS":
                            card.style.backgroundColor="gray";
                            break;
                        case "NOIR":
                            card.style.backgroundColor="black";
                            break;
                    }
                }
                else{
                    card.style.backgroundColor="white";
                }
                cardsContainer.appendChild(card);
            });
        } else {
            console.log("Element with id 'cards-container' not found.");
        }

        
    }

}