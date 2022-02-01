// Présentation des fonctions JavaScript
// Présentation des fonctions JavaScript prédéfinies
let prez = 'Bonjour, je suis Pierre';

document.getElementById('p1').innerHTML = Math.random();

let prez2 = prez.replace('Pierre', 'Mathilde');
document.getElementById('p2').innerHTML = prez2;

// Les fonctions personnalisées
function aleatoire() {
    return Math.round(Math.random() * 100);
}

function multiplication(n1, n2) {
    return n1 + ' * ' + n2 + ' = ' + (n1 * n2);
}

document.getElementById('p3').innerHTML = aleatoire();
document.getElementById('p4').innerHTML = multiplication(aleatoire(), aleatoire());

//  Portée des variables et valeurs de retour des fonctions
// Illustration de la notion de portée des variables en JavaScript : exemple pratique
let z = 5;
var a = 10;

function portee1() {
    document.getElementById('p5').innerHTML = 'Depuis la portee1() : <br> a = ' + a + '<br> z = ' + z;
}

function portee2() {
    let y = 1;
    var b = 2;
    document.getElementById('p6').innerHTML = 'Depuis la portee2() : <br> b = ' + b + '<br> y = ' + y;
}

function portee3() {
    let z = 20;
    var a = 40;
    document.getElementById('p7').innerHTML = 'Depuis la portee2() : <br> a = ' + a + '<br> z = ' + z;
}

portee1();
portee2();
portee3();

document.getElementById('p8').innerHTML = 'Depuis l\'espace global : <br> a = ' + a + '<br> z = ' + z;
//document.getElementById('p9').innerHTML = 'Depuis l\'espace global : <br> b = ' + b + '<br> y = ' + y;

// Les différences de portée entre les variables var et let en JavaScript
function portee4() {
    let x = 1;
    var c = 2;
    if (true) {
        let x = 5;
        var c = 10;
        document.getElementById('p10').innerHTML = 'x (dans if) = ' + x;
        document.getElementById('p11').innerHTML = 'c (dans if) = ' + c;
    }
    document.getElementById('p12').innerHTML = 'x (hors if) = ' + x;
    document.getElementById('p13').innerHTML = 'c (hors if) = ' + c;
}

portee4();

// Les valeurs de retour des fonctions
let resultatReplace = prez.replace('jour', 'soir');
document.getElementById('p14').innerHTML = resultatReplace + ' Giraud';

function div(a, b) {
    if (b == 0) {
        return 'Division par 0 impossible';
    } else {
        return a/b;
        alert('Ce message ne s\'affiche jamais');
    }
}

// let nombre1 = prompt('Entrez un premier nombre');
// let nombre2 = prompt('Entrez un deuxième nombre');
//
// let resultatDiv = div(nombre1, nombre2);
let resultatDiv = div(aleatoire(),aleatoire());

document.getElementById('p15').innerHTML = resultatDiv;

// Fonctions anonymes, auto-invoquées et récursives
// Création et exécution ou appel d’une fonction anonyme
// Exécuter une fonction anonyme en utilisant une variable
let alerte = function() {
    alert('Aie');
}

alerte();

// Auto-invoquer une fonction anonyme
// Fonction anonyme auto-invoquée
(function (){alerte('Aie')})();
// Fonction nommée auto-invoquée
(function bonjour(){alerte('Aie')})();

// Exécuter une fonction anonyme lors du déclenchement d’un évènement
let para1 = document.getElementById('p16');
let para2 = document.getElementById('p17');

para1.addEventListener('click', function (){alert('Clic sur p id=p16');});
para2.addEventListener('click', function (){alert('Clic sur p id=p17');});

// Les fonctions récursives
function decompte(t) {
    if (t > 0) {
        document.getElementById('p18').innerHTML += t + '<br>';
        return decompte(t - 1);
    } else {
        return t;
    }
};

decompte(7);