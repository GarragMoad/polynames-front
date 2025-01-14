export class CreatePartieService {
    constructor() {

    }

    static async CreatePartie(nom, role) {
        const response = await fetch("http://localhost:8081/CreatePartie", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nom": nom,
                "role": role
            })
        });
        if (!response.ok) {
            console.log("Erreur lors de la création de la partie:", response.statusText);
            throw new Error('Erreur lors de la création de la partie');
        }
        
        const data = await response.json();
        return data;
    }

}



