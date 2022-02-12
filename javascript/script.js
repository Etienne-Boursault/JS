'use strict';

// L'asynchrone
// Introduction à l’asynchrone
// Les fonctions de rappel : à la base de l’asynchrone en JavaScript
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
setTimeout(function() {p1.innerHTML = 'Message affiché après 5 secondes';},5000)

// Cette partie est affiché avant le reste
p2.innerHTML = 'Suite du script';

// Les limites des fonctions de rappel : le « callback hell »
// Des if dans des if => Pas propre
// Les promesses
// Créer une promesse avec le constructeur Promise
const promesse = new Promise((resolve, reject) => {

});

function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
        script.onload = () => resolve('Fichier ' + src + ' bien chargé');
        script.onerror = () => reject(new Error('Echec de chargement de ' + src));
    });
}

const promesse1 = loadScript('javascript/boucle.js');
// const promesse2 = loadScript('javascript/script2.js');
// Exploiter le résultat d’une promesse avec les méthodes then() et catch()
const promesse2 = promesse1.then(result => alert(result), error => alert(error));

const promesse3 = loadScript('javascript/script2.js');
promesse3.catch(alert);

// Le chainage des promesses
loadScript('javascript/boucle.js')
.then(result => loadScript('javascript/script2.js', result))
.then(result2 => loadScript('javascript/script3.js', result2))
.catch(alert)
.then(() => alert('Blabla'));

// La composition de promesses
/*
Promise.all(([func1(), func2(), func3()]))
.then(([result1, result2, result3]) => {
    // Utilisation de result1, result2 et result3
})*/

// Utiliser async et await pour créer des promesses plus lisibles
// Le mot clef async
async function bonjour() {
    return 'Bonjour';
}
bonjour().then(alert);

// Le mot clef await
async function test() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Ok !'), 2000)
    });

    let result = await promise;
    alert(result);
}

test();

// Utiliser async et await pour réécrire nos promesses + La gestion des erreurs avec la syntaxe async / await
// Equivalent au code du chainage des promesses
async function testAwait() {
    try {
        const test1 = await loadScript('javascript/boucle.js');
        alert(test1);
        const test2 = await loadScript('javascript/blblbl.js');
        alert(test2);
        const test3 = await loadScript('javascript/cdcdcd.js');
        alert(test3);
    } catch (err) {
        alert(err);
        let script = document.head.lastChild;
        script.remove();
    }
}

testAwait();

// Chemin critique du rendu et attributs HTML async et defer
/*
Le chemin critique du rendu est constitué de 6 grandes étapes :
    1. La construction de l’arborescence du DOM (Document Object Model) ;
2. La construction de l’arborescence du CSSOM (CSS Object Model) ;
3. L’exécution du code JavaScript ;
4. La construction de l’arbre de rendu ;
5. La génération de la mise en page ;
6. La conversion du contenu visible final de la page en pixels.*/
