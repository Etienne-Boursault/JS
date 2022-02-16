'use strict';
// Les Modules
// Les modules JavaScript – import et export
// Définition et création de modules JavaScript
import {disBonjour} from './module'; // Fonctionne via un serveur...

disBonjour('Pierre');

// Les fonctionnalités principales des modules
// L’évaluation des modules
import {user} from "./module";

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

p1.textContent = 'Prenom et Nom depuis script.js : ' + user.prenom + ' ' + user.nom;
user.prenom = 'Victor';
p2.textContent = 'Prenom et Nom depuis script.js (après chargement) : ' + user.prenom + ' ' + user.nom;
