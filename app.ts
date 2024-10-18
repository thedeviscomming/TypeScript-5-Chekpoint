// Définition de l'interface Véhicule
interface Véhicule {
    make: string;
    model: string;
    year: number;
    start(): void; // Méthode qui renvoie void
}

// Implémentation de la classe Voiture
class Voiture implements Véhicule {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started"); // Enregistrement du message
    }
}

// Création d'une instance de la classe Voiture
const maVoiture = new Voiture("Toyota", "Corolla", 2021);

// Appel de la méthode start
maVoiture.start(); // Affiche "Car engine started" dans la console
