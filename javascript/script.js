'use strict';
// Stockage des données
// Les cookies
// Obtenir la liste des cookies et créer un cookie en JavaScript
document.cookie = 'user=Pierre';

// Les options des cookies
// La portée des cookies : chemin (répertoire) et domaine d’accessibilité
document.cookie = 'user=Pierre; path=/; domain=localhost';

// L’âge maximal et la date d’expiration des cookies
let date = new Date(Date.now() + 86400000);
date = date.toUTCString();
document.cookie = 'user=Pierre; path=/; domain=localhost; expires=' + date;
// ou document.cookie = 'user=Pierre; path=/; domain=localhost; max-age=86400';

// Les cookies et la sécurité
document.cookie = 'user=Pierre; path=/; domain=localhost; expires=' + date + '; secure; samesite=lax';

// Modifier ou supprimer un cookie en JavaScript
// Supprime le cookie en lui passant une date d'expiration passée
document.cookie = 'user=Pierre; path=/; domain=localhost; expires=Thu, 01 Jan 1970 00:00:00 UTC';
document.getElementById('p1').innerHTML = document.cookie;

// L’API Web Storage
// Utiliser l’API Web Storage – Exemple pratique
let htmlElement = document.querySelector('html');
let bgColor = document.getElementById('bgtheme');

if (localStorage.getItem('bgtheme')) {
    updateBg();
} else {
    setBg();
}

function updateBg() {
    let bg = localStorage.getItem('bgtheme');
    htmlElement.style.backgroundColor = '#' + bg;
    bgColor.value = bg;
}

function setBg() {
    localStorage.setItem('bgtheme', bgColor.value);
    updateBg();
}

bgColor.addEventListener('change', setBg);

// L’API de stockage IndexedDB
// Ouverture de la connexion à la base de données
let db = '';
let openRequest = indexedDB.open('db', 1);

openRequest.onerror = function () {
    alert('Impossible d\'accéder à IndexedDB');
};

// Création d’un objet de stockage ou « object store »
openRequest.onupgradeneeded = function() {
    db = openRequest.result;

    // Si l'objet de stockage users n'existe pas, on le crée
    if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', {keyPath: 'id'});
    }
};

// Création de requêtes et gestion des résultats
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
openRequest.onsuccess = function() {
    db = openRequest.result;
    let transaction = db.transaction('users', 'readwrite');

    transaction.oncomplete = function (){
        p2.innerHTML = 'Transaction terminée';
    };
    let users = transaction.objectStore('users');

    let user = {
        id: '1',
        prenom: 'Pierre',
        mail: 'pierre.giraud@edhec.com',
        inscription: new Date()
    };

    let ajout = users.add(user);
    ajout.onsuccess = function() {
        p3.innerHTML = 'Utilisateur ajoutée avec la clef : ' + ajout.result;
    };

    ajout.onerror = function() {
        alert('Erreur : ' + ajout.error);
    }

    let lire = users.get('1');
    lire.onsuccess = function() {
        p4.innerHTML = 'Nom de l\'utilisateur 1 : ' + lire.result.prenom;
    };

    lire.onerror = function() {
        alert('Erreur : ' + lire.error);
    };

    let supprimer = users.delete(1);
    supprimer.onsuccess = function() {
        p4.innerHTML = 'Utilisateur supprimé de la base de données';
    };

    supprimer.onerror = function() {
        alert('Erreur : ' + supprimer.error);
    };
};