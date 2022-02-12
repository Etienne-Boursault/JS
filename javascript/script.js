use strict;

// Gestion des erreurs
// Gérer une erreur avec les blocs try…catch
let p1 = document.getElementById('p1');
try {
    prenom;
    p1.innerHTML = 'Bonjour';
}catch (err) {
    p1.innerHTML =
        'Erreur rencontrée.' +
        '<br>Nom de l\'erreur : ' + err.name +
        '<br>Message de l\'erreur : ' + err.message +
        '<br>Emplacement de l\'erreur : ' + err.stack;
}

// Les exceptions en JavaScript et l’instruction throw
let p2 = document.getElementById('p2');
function div() {
    let x = prompt('Entrez un premier nombre (numérateur)');
    let y = prompt('Entrez un premier nombre (dénominateur)');

    if (isNaN(x) || isNaN(y) || x == '' || y == '') {
        throw new Error('Merci de rentrer 2 nombres');
    } else if (y == 0) {
        throw new Error('Division par 0 impossible');
    } else {
        p2.innerHTML = x/y;
    }
}

let p3 = document.getElementById('p3');
try {
    div();
} catch (err) {
    p2.innerHTML = err.message;
}
// Le bloc finally
finally {
    p3.innerHTML = 'Ce message s\'affiche quoiqu\'il arrive';
}

// Le mode script
// Activer et utiliser le mode strict
