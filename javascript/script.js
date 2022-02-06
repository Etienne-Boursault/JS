// Document Object Model
// Accès aux éléments HTML et modification du contenu
// Accéder à un élément à partir de son sélecteur CSS associé
document.querySelector('p').textContent = '1er paragraphe du document';
let documentDiv = document.querySelector('div');
documentDiv.querySelector('p').textContent = '1er paragraphe du premier div';

document.querySelector('p.bleu').style.color = 'blue';

let documentParas = document.querySelectorAll('p');
let divParas = documentDiv.querySelectorAll('p');

documentParas.forEach(function (nom, index) {
    if (index < 4) {
        nom.textContent += ' (paragraphe n° : ' + index + ')';
    }
});

// Accéder à un élément en fonction de la valeur de son attribut id

document.getElementById('p1').style.color = 'blue';

// Accéder à un élément en fonction de la valeur de son attribut class

let bleu = document.getElementsByClassName('bleu');
for (valeur of bleu) {
    valeur.style.color = 'purple';
}

// Accéder à un élément en fonction de son identité
let paras = document.getElementsByTagName('p');
for (valeur of paras) {
    valeur.style.color = 'black';
}

// Accéder directement à des éléments particuliers avec les propriétés de Document

document.body.style.color = 'green';

document.title = 'Le Document Object Model';

// Accéder au contenu des éléments et le modifier
document.querySelector('#d1').innerHTML +=
    '<ul><li>Elément n°1</li><li>Elément n°2</li></ul>';

document.querySelector('p').outerHTML = '<h2>Je suis un titre h2</h2>';
document.getElementById('texte').textContent = '<span>Texte modifié</span>'

let texteVisible = document.getElementById('p4').innerText; // Fonctionne avec Chrome mais pas Firefox
let texteEntier = document.getElementById('p4').textContent;

document.getElementById('p5').innerHTML =
    'Texte visible : ' + texteVisible + '<br>Texte complet : ' + texteEntier;

// Naviguer dans le DOM
// Accéder au parent ou à la liste des enfants d’un noeud
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');

p7.parentNode.style.backgroundColor = 'RGBa(240, 160, 000, 0.5)';
let enfantsP6 = p6.childNodes;

enfantsP6[1] = p6.style.fontWeight = 'bold';

let enfantsEltP6 = p6.children;

enfantsEltP6[0].style.textDecoration = 'underline';

// Accéder à un noeud enfant en particulier à partir d’un noeud parent
let bodyFirstChild = document.body.firstChild;
let bodyLastChild = document.body.lastChild;
let bodyFirstElementChild = document.body.firstElementChild;
let bodyLastElementChild = document.body.lastElementChild;

document.getElementById('p8').innerHTML =
    'Premier nœud enfant de body : ' + bodyFirstChild +
    '<br>Premier nœud enfant élément de body : ' + bodyLastChild +
    '<br>Dernier nœud enfant de body : ' + bodyFirstElementChild +
    '<br>Dernier nœud enfant élément de body : ' + bodyLastElementChild;

// Accéder au noeud précédent ou suivant un noeud dans l’architecture DOM
let p10 = document.getElementById('p10');
let p10PreviousSibling = p10.previousSibling;
let p10NextSibling = p10.nextSibling;
let p10PreviousElementSibling = p10.previousElementSibling;
let p10NextElementSibling = p10.nextElementSibling;

p10PreviousElementSibling.style.color = 'blue';
p10NextElementSibling.style.backgroundColor = 'RGBa(240, 160, 000, 0.5)';
// Obtenir le nom d’un noeud, son type ou son contenu
document.getElementById('p12').innerHTML =
    'Nom nœud p10 : ' + p10.nodeName +
    '<br>Valeur nœud p10: ' + p10.nodeValue +
    '<br>Type nœud p10: ' + p10.nodeType +
    '<br><br>Nom p10PreviousSibling : ' + p10PreviousSibling.nodeName +
    '<br><br>Nom p10PreviousElementSibling : ' + p10PreviousElementSibling.nodeName +
    '<br>Valeur du premier nœud enfant de p10 : ' + p10.firstChild.nodeValue;

// Ajouter, modifier ou supprimer des éléments du DOM
// Créer de nouveaux noeuds et les ajouter dans l’arborescence du DOM
// Créer un noeud Element ou un noeud Texte
let newP = document.createElement('p');
let newTexte = document.createTextNode('Texte écrit en JS et inséré avec appendChild()');
newP.textContent = 'Paragraphe créé et inséré grâce au JS';

// Insérer un noeud dans le DOM
let b = document.body;

b.prepend(newP);
b.append(newP, 'Text inséré avec append()');
b.appendChild(newTexte);
b.insertBefore(newP, p10);

let p11 = document.getElementById('p11');
let htmlContent = '<strong> et du texte important</strong>'

p10.insertAdjacentElement('afterend', newP);
p10.insertAdjacentHTML('beforeend', htmlContent);
p11.insertAdjacentText('afterbegin', 'Texte ajouté dans ');

// Déplacer un noeud dans le DOM
let p13 = b.lastElementChild;
b.insertBefore(p10, p13)

// Cloner ou remplacer un noeud dans le DOM
let cloneP10 = p10.cloneNode(true);
p11.insertAdjacentElement('afterend', cloneP10);

b.replaceChild(newP, p13);

// Supprimer un noeud du DOM
let eltDel = b.removeChild(p10);

p11.remove();

document.getElementById('p14').innerHTML =
    'Noeud supprimé du DOM : ' + eltDel + '<br>Contenu : ' + eltDel.textContent;

// Manipuler les attributs et les styles des éléments
// Tester la présence d’attributs
let vide = document.getElementById('vide');

if (p10.hasAttributes()) {
    vide.textContent = 'p10 possède des attributs';
}

if (p10.hasAttribute('id')) {
    vide.textContent += ' dont un attribut id';
}

let p15 = document.getElementById('p15');
// Récupérer la valeur ou le nom d’un attribut ou définir un attribut
if (p10.hasAttributes()) {
    let attP10 = p10.attributes;
    p15.innerHTML = 'Liste des attributs de P10 : <br>';

    for (let i = 0; i < attP10.length; i++) {
        p15.innerHTML += attP10[i].name + ' = ' + attP10[i].value + '<br>';
    }
}

p15.setAttribute('class', 'blue');

// Supprimer un attribut
p15.removeAttribute('class');

// Modifier les styles d’un élément
let p16 = document.getElementById('p16');
p16.innerHTML = 'Paragraphe n°16';
p16.style.color = 'crimson';
p16.style.fontSize = '20px';

p15.style.backgroundColor = 'orange';

// Gestion d’évènements
// Définir des gestionnaires d’évènements
// Utiliser les attributs HTML pour gérer un évènement
// Utiliser les propriétés JavaScript pour gérer un évènement
let b1 = document.querySelector('#b1');
let d3 = document.querySelector('#d3');

b1.onclick = function () {alert('Bouton cliqué')};
d3.onmouseover = function () {this.style.backgroundColor = 'orange'};
d3.onmouseout = function () {this.style.backgroundColor = 'white'};

// Utiliser la méthode addEventListener() pour gérer un évènement
let b2 = document.querySelector('#b2');
let d4 = document.querySelector('#d4');

b2.addEventListener('click', function() {alert('Bouton cliqué')});
d4.addEventListener('mouseover', changeCouleur);
d4.addEventListener('mouseover', function() {this.style.fontWeight = 'bold'});
d4.addEventListener('mouseout', function() {this.style.backgroundColor = 'white'});

// Supprimer un gestionnaire d’évènements avec removeEventListener()
function changeCouleur() {
    this.style.backgroundColor = 'orange';
}

d4.removeEventListener('mouseover', changeCouleur);

// Propagation des évènements
// Présentation du phénomène de propagation des évènements
let d5 = document.querySelector('#d5');
let p24 = document.querySelector('#p24');

d5.addEventListener('click', function(){alert('div cliqué')});
p24.addEventListener('click', function(){alert('paragraphe cliqué')});

// Les phases de capture et de bouillonnement
// Choisir la phase de déclenchement d’un gestionnaire d’évènements
let d6 = document.querySelector('#d6');
let p26 = document.querySelector('#p26');

d6.addEventListener('click', function(){alert('div cliqué')}, true);
p26.addEventListener('click', function(){alert('paragraphe cliqué')}, true);

// Empêcher la propagation d’évènements
// Stopper la propagation d’un évènement
let d7 = document.querySelector('#d7');
let p28 = document.querySelector('#p28');

d7.addEventListener('click', function(){alert('div cliqué')});
p28.addEventListener('click', cliqueAndStop);

function cliqueAndStop(e) {
    alert('Paragraphe cliqué - Arrêt de la propagation');
    e.stopPropagation();
}

// Prévenir le comportement de base d’un évènement
let envoi = document.getElementById('btn-envoi');
envoi.addEventListener('click', testDonnes);

function testDonnes(e) {
    alert('Envoi du formulaire bloqué');
    e.preventDefault();
}