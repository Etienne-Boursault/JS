// Introduction à la programmation orientée objet en JavaScript
// Première définition de l’orienté objet et des objets en JavaScript

let utilisateur = {
    nom: ['Pierre', 'Giraud'],
    age: 29,
    mail: 'pierre.giraud@edhec.com',

    bonjour: function () {
        document.getElementById('p1').innerHTML = 'Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age
            + ' ans, ';
    }
};

document.getElementById('p2').innerHTML = typeof utilisateur;

// Création d’un objet littéral
// Utiliser le point pour accéder aux membres d’un objet, les modifier ou en définir de nouveaux
document.getElementById('p3').innerHTML = 'Nom : ' + utilisateur.nom;
document.getElementById('p4').innerHTML = 'Âge : ' + utilisateur.age;
utilisateur.age = 30;
document.getElementById('p5').innerHTML = 'Nouvelle âge : ' + utilisateur.age;
utilisateur.bonjour();
utilisateur.taille = 170;
utilisateur.prez = function () {
    document.getElementById('p6').innerHTML = 'Bonjour, je suis ' + this.nom[0] + ', j\'ai ' + this.age
        + ' ans, et je mesure ' + this.taille + ' cm';
}
utilisateur.prez();

// Utiliser les crochets pour accéder aux propriétés d’un objet, les modifier ou en définir de nouvelles
document.getElementById('p7').innerHTML = 'Nom : ' + utilisateur.nom[0];
document.getElementById('p8').innerHTML = 'Prénom : ' + utilisateur.nom[1];

// Définition et création d’un constructeur
// La fonction construction d’objets : définition et création d’un constructeur
function Utilisateur(n, a, m) {
    this.nom = n;
    this.age = a;
    this.mail = m;

    this.bonjour = function () {
        document.getElementById('p9').innerHTML = 'Bonjour, je suis ' + this.nom[0] + ', j\'ai '
            + this.age + ' ans, ';
    }
}

// Créer des objets à partir d’une fonction constructeur

let pierre = new Utilisateur(['Pierre', 'Giraud'], 29, 'pierre.giraud@edhec.com');
pierre.bonjour();
document.getElementById('p10').innerHTML = 'Nom complet: ' + pierre.nom;
document.getElementById('p11').innerHTML = 'Prénom : ' + pierre.nom[0];
document.getElementById('p12').innerHTML = 'Âge : ' + pierre.age;
console.log(pierre);
// Constructeur Object, prototype et héritage
// Le prototype en JavaScript orienté objet
// Ajout de propriétés et méthodes au prototype de Utilisateur de la même façon que pour n'importe quel objet
let mathilde = new Utilisateur(['Math', 'ML'], 27, 'math@edhec.com');
Utilisateur.prototype.taille = 170; // Donne une taille à tous les objets appartenant au constructeur Utilisateur

// Chaque objet possède une propriété "prototype", un constructeur est un objet en JS, il possède alors une
// propriété "prototype"
mathilde.poids = 60;
Utilisateur.poids = 60; // Ne fait rien
let flo = new Utilisateur(['Flo', 'Riant'], 54, 'mail@mail.ml');
console.log(mathilde);
document.getElementById('p13').innerHTML = 'Le poids de ' + mathilde.nom[0] + ' est de ' + mathilde.poids +
    ', sa taille est de ' + mathilde.taille;
document.getElementById('p14').innerHTML = 'Le poids de ' + pierre.nom[0] + ' est de ' + pierre.poids +
    ', sa taille est de ' + pierre.taille;
document.getElementById('p15').innerHTML = 'Le poids de ' + flo.nom[0] + ' est de ' + flo.poids +
    ', sa taille est de ' + flo.taille;

// Mise en place d’une hiérarchie d’objets avec héritage en JavaScript
function Ligne(longueur){
    this.longueur = longueur;
}
Ligne.prototype.taille = function () {
    document.getElementById('p16').innerHTML = 'Longueur : ' + this.longueur
};

function Rectangle(longueur, largeur){
    Ligne.call(this, longueur);
    this.largueur = largeur;
}
Rectangle.prototype = Object.create(Ligne.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.aire = function (){
    document.getElementById('p17').innerHTML = 'Aire : ' + this.longueur * this.largueur
};

function Parallelepipede(longueur, largeur, hauteur) {
    Rectangle.call(this, longueur, largeur);
    this.hauteur = hauteur;
}
Parallelepipede.prototype = Object.create(Rectangle.prototype);
Parallelepipede.prototype.constructor = Parallelepipede;
Parallelepipede.prototype.volume = function (){
    document.getElementById('p18').innerHTML = 'Volume : ' + this.longueur * this.largueur * this.hauteur
};
let geo = new Parallelepipede(5, 4, 3);
geo.volume();
geo.aire();
geo.taille();

// Les classes en orienté objet JavaScript
// Les classes en JavaScript
class LigneClasse{
    constructor(nom,longueur, id) {
        this.nom = nom;
        this.longueur = longueur;
        this.id = id;
    }

    taille(){document.getElementById(this.id).innerHTML +=
        'Longueur de ' + this.nom + ' : ' + this.longueur + '<br>'
    };
}

let geo1 = new LigneClasse('geo1', 10, 'p19');
let geo2 = new LigneClasse('geo2', 5, 'p20');

geo1.taille();
geo2.taille();

// Classes étendues et héritage en JavaScript
class RectangleClasse extends LigneClasse {
    constructor(nom, longueur, largeur, id) {
        super(nom, longueur, id);
        this.largeur = largeur;
    }

    aire() {
        document.getElementById(this.id).innerHTML +=
            'Aire de ' + this.nom + ' : ' + this.longueur * this.largeur + '<br>'
    };
}

let geo3 = new RectangleClasse('geo3', 7, 5, 'p21');
geo3.aire();
geo3.taille();
