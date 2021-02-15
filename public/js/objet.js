// exo 1
let voiture = {
    marque: "audi",
    model: "A6",
    type: "break",
    color: "grise",
    prix: 20000,
    phrase() {
        console.log(`Ma ${this.marque} ${this.model} est de type ${this.type}. Elle est ${this.color} et vaut ${this.prix}`);
    }
}
voiture.phrase()

// exo 2 
let personnage = {
    nom: "test",
    prenom: "mila",
    argent: 1000,
    acheter() {
        let achat = this.argent - article.prix
        let stock = article.stock - 1
        console.log(`apres avoir acheter un ${article.nomProduit} il vous reste ${achat} € et le stock est de ${stock} `);
    }
}

let article = {
    nomProduit: "yoyo",
    prix: 100,
    stock: 10,
}

personnage.acheter();


// exo 3
let molengeek = {
    nombre: 0,
    patron: {
        nom: "ouasa",
        prenom: "ibi"
    },
    employe: [],
    addEmploye(prenom) {
        this.employe.push(prenom);
    },
    delEmploye(prenom) {
        this.employe = this.employe.filter((el) => {
            return el !== prenom
        })
    },
    random() {
        let max = this.employe.length
        let random = Math.round(Math.random() * (max - 0) + 0);

        let select = this.employe[random];
        console.log(`felicitations ! ${select} vous êtes l'employé du mois`);
    }
}

molengeek.addEmploye("jamila");
molengeek.addEmploye("bene");
molengeek.addEmploye("zulma");
molengeek.addEmploye("seb");
console.log(molengeek.employe);
molengeek.random()
molengeek.nombre = molengeek.employe.length
console.log(molengeek.nombre);

// exo4
let perso = {
    identite: {
        nom: "test",
        prenom: "charlotte"
    },
    argent: 1000,
    lieu: "maison",
    changeHumeur() {
        let humeur = ["content", "faché"]
        let hasard = Math.round(Math.random());
        this.humeur = humeur[hasard]
        console.log(`tu es d'humeur ${this.humeur}`);
    }
}
perso.changeHumeur()
console.log(`le perso se trouve : ${perso.lieu}`);

let changerLieu = (nom) => {
    perso.lieu = nom
}


changerLieu("molengeek")
console.log(`le perso se trouve : ${perso.lieu}`);


let gagnerArgent = (x) => {
    let i = 0;
    while (i < 5) {
        if (x.humeur == "content") {
            x.argent += 15
            console.log(x.argent);
            i++
        } else {
            x.argent += 10
            console.log(x.argent);
            i++
        }      
    }

}
console.log(perso.humeur);
gagnerArgent(perso)