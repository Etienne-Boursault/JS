'use strict';
// Les fonctionnalités principales des modules
// L’évaluation des modules
import {user} from "./module";

let p3 = document.getElementById('p3');

p3.textContent = 'Prenom et Nom depuis script2.js : ' + user.prenom + ' ' + user.nom;
