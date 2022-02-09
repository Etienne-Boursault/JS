// Retour sur les fonctions
// Paramètres du reste et opérateur de décomposition
// L’opérateur de décomposition
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

let tb1 = [3, 5, 1, 32];
let tb2 = [64, -5, 17];

p1.innerHTML = 'Plus grand nombre de tb1 : ' + Math.max(...tb1);
p2.innerHTML = 'Plus grand nombre de tb1 et tb2 : ' + Math.max(...tb1, ...tb2);

// Les fonctions fléchées
// Les déclaration de fonctions
function disBonjour() {
    document.getElementById('p3').innerHTML = 'Bonjour';
}

// Les expressions de fonctions
let disBonsoir = function (){
    document.getElementById('p4').innerHTML = 'Bonsoir';
}

let i = 0;
let disBonjourA = function bonjourA(nom) {
    if (nom) {
        document.getElementById('p' + (5+i)).innerHTML = 'Bonjour ' + nom;
    } else {
        i++;
        bonjourA('inconnu');
    }
}

disBonjour();
disBonsoir();
disBonjourA('Pierre');
disBonjourA();

// Les expressions de fonctions fléchées : syntaxe et intérêts
let somme = (a, b) => a + b;
let double = n => n * 2;

document.getElementById('p7').innerHTML = somme(5, 8);
document.getElementById('p8').innerHTML = double(8);

// Les particularités des fonctions fléchées
// Les fonctions fléchées et le mot clef this
let pierre = {
    nom: 'Giraud',
    prenom: 'Pierre',
    hobbies: ['Trail', 'Triathlon', 'Cuisine'],

    disCoucou() {
        let coucou = () => document.getElementById('p9').innerHTML = 'Coucou ' + this.prenom + ' ' + this.nom;
        coucou();
    }
}

pierre.disCoucou();

// Les closures (« fermetures »)
// Portée et durée de vie des variables
// Les closures en pratique
function compteur() {
    let count = 0;

    return function () {
        return count++;
    };
}

let plusUn = compteur();
let plusUnBis = compteur();
for (let i = 10; i < 15; i++) {
    document.getElementById('p' + i).innerHTML = plusUn();
    if (i % 2 == 0) {
        document.getElementById('p' + i).innerHTML += ' ' + plusUnBis();
    }
}

// Délai d’exécution : setTimeout() et setInterval()
// La méthode setTimeout()
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let p15 = document.getElementById('p15');
let timeoutId;
let intervalId;
b1.addEventListener('click', message);

function message() {
    timeoutId = setTimeout(alert, 2000, 'Message d\'alerte après 2 secondes');
}

// La méthode clearTimeout()
b2.addEventListener('click', stopDelai);
function stopDelai() {
    clearTimeout(timeoutId);
}

// La méthode setInterval()
b3.addEventListener('click', afficheHeure);
function afficheHeure() {
    intervalId = setInterval(function (){
        let d = new Date();
        p15.innerHTML = d.toLocaleTimeString();
    }, 1000)
}

// La méthode clearInterval()
b4.addEventListener('click', stopTimer);
function stopTimer() {
    clearInterval(intervalId);
}