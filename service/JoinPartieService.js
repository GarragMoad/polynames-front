export class JoinPartieService {
    constructor() {

    }

    static async joinPartie(nom, code) {
        const response = await fetch("http://localhost:8081/JoinPartie", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nom": nom,
                "code": code
            })
        });
        if (!response.ok) {
            console.log("Erreur lors de la rejoindre de la partie:", response.text);
            throw new Error('Erreur lors de la rejoindre de la partie');
        }
        
        const data = await response.json();
        return data;
    }

}



