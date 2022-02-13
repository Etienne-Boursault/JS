'use strict';

// Symboles, itérateurs et générateurs
// Les symboles et l’objet Symbol
// Définir des symboles
const symbole1 = Symbol();
const symbole2 = Symbol('symbole2');
const x42 = Symbol(42);

// Créer un symbole global
const symbole3 = Symbol.for('symbole3');
document.getElementById('p1').innerHTML = symbole3.toString();

const symboleGlobal = Symbol.for('symbole4');
const clefSymboleGlobal = Symbol.keyFor(symboleGlobal);
document.getElementById('p2').innerHTML = 'Clef du symbole global : ' + clefSymboleGlobal;

// Protocoles et objets Iterable et Iterateur
// Le protocole itérable
let utilisateur = {
    prenom: 'Pierre',
    nom: 'Giraud',
    age: 29,

    // Methode itérateur avec Symbole.iterateur comme clef
    [Symbol.iterator]() {
        // Renvoie un tableau contenant les valeurs des propriététés de l'objet
        let tableau = Object.values(this);
        let prop = 0;

        return {
            next() {
                if (prop < tableau.length) {
                    return {
                        value: tableau[prop++],
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    };
                }
            }
        };
    }
};

let p3 = document.getElementById('p3');
for (let p of utilisateur) {
    p3.innerHTML += p;
}

// Les générateurs
// Les fonctions génératrices et l’objet Generator
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generateur = generateSequence();
// Le mot clef yield et l’utilisation des générateurs
let p4 = document.getElementById('p4');
let un = generateur.next();
p4.innerHTML = un.value;

// La composition de générateurs
function* generateSequence2() {
    yield 4;
    yield* generateSequence();
    yield 5;
}

let generateur2 = generateSequence2();

let quatre = generateur2.next();
let unbis = generateur2.next();
let deux = generateur2.next();
let trois = generateur2.next();
let cinq = generateur2.next();
let und = generateur2.next();

document.getElementById('p5').innerHTML =
    quatre.value + '\n' +
    unbis.value + '\n' +
    deux.value + '\n' +
    trois.value + '\n' +
    cinq.value + '\n' +
    und.value;
