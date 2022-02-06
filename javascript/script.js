// Browser Object Model
// APIs, Browser Object Model et interface Window
// Propriétés, méthodes et fonctionnement de l’objet Window
// Les propriétés de l’objet Window
document.getElementById('p1').innerHTML = 'Taille de la fenêtre (ext) : ' + window.outerWidth + '*'
    + window.outerHeight;
document.getElementById('p2').innerHTML = 'Taille de la fenêtre (int) : ' + window.innerWidth + '*'
    + window.innerHeight;
// Les méthodes de Window
// Ouvrir, fermer, redimensionner ou déplacer une fenêtre
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let winSize = 'width=500, height=500';

b1.addEventListener('click', openWindow);
b2.addEventListener('click', resizeWindowBy);
b3.addEventListener('click', resizeWindowTo);
b4.addEventListener('click', moveWindowBy);
b5.addEventListener('click', moveWindowTo);
b6.addEventListener('click', scrollWindowBy);
b7.addEventListener('click', scrollWindowTo);
b8.addEventListener('click', closeWindow);

function openWindow() {
    fenetre = window.open('', '', winSize);
}

function resizeWindowBy() {
    fenetre.resizeBy(200, 100);
}

function resizeWindowTo() {
    fenetre.resizeTo(960, 100);
}

function moveWindowBy() {
    fenetre.moveBy(100, 100);
}

function moveWindowTo() {
    fenetre.moveTo(0, 0);
}

function scrollWindowBy() {
    fenetre.scrollBy(0, 200);
}

function scrollWindowTo() {
    fenetre.scrollTo(0, 0);
}

function closeWindow() {
    fenetre.close();
}

// Afficher des boites de dialogue dans une fenêtre
let b9 = document.getElementById('b9');
b9.addEventListener('click', confirmBox);

function confirmBox() {
    let response = confirm("Ouvrir une fenêtre Google ?");
    if (response) {
        fenetre = window.open('https://www.google.com', '', winSize);
    }
}

// Interface et objet Navigator et géolocalisation
// Les propriétés et méthodes de Navigator
document.getElementById('p3').innerHTML =
    'Langue du navigateur : ' + navigator.language +
    '<br>Cookies autrisés : ' + navigator.cookieEnabled +
    '<br>Plateforme utilisée : ' + navigator.platform + // Deprecated
    '<br>Nom du navigateur : ' + navigator.appName + // Deprecated
    '<br>Nom de code du navigateur : ' + navigator.appCodeName +// Deprecated
    '<br>Version du navigateur : ' + navigator.appVersion + // Deprecated
    '<br>En-tête du fichier user agent envoyé par le navigateur : ' + navigator.userAgent;

// L’interface et l’objet Geolocation
function coordonnees(pos) {
    let crd = pos.coords;

    let latitude = crd.latitude;
    let longitude = crd.longitude;

    document.getElementById('p4').innerHTML = 'Latitude : ' + latitude.toFixed(6);
    document.getElementById('p5').innerHTML = 'Longitude : ' + longitude.toFixed(6);
}

navigator.geolocation.getCurrentPosition(coordonnees);

// Interface et objet History
// Les propriétés et méthodes de History
document.getElementById('p6').innerHTML = history.length + ' pages visitées';

let b10 = document.getElementById('b10');
let b11 = document.getElementById('b11');
let b12 = document.getElementById('b12');

b10.addEventListener('click', hgo);
b11.addEventListener('click', hback);
b12.addEventListener('click', hforward);

function hgo() {
    history.go(-2);
}

function hback() {
    history.back();
}

function hforward() {
    history.forward();
}

// Interface et objet Location
// Les propriétés et méthode de l’objet Location

let b13 = document.getElementById('b13');
let b14 = document.getElementById('b14');
let b15 = document.getElementById('b15');

b13.addEventListener('click', recharge);
b14.addEventListener('click', assigne);
b15.addEventListener('click', remplace);

function recharge() {
    location.reload();
}

function assigne() {
    location.assign('https://www.pierre-giraud.com');
}

function remplace() {
    location.replace('https://www.pierre-giraud.com');
}

// Interface et objet Screen
// Les propriétés et méthodes de l’objet Screen
document.getElementById('p7').innerHTML =
    'Dimensions totales de l\'écran : ' + screen.width + '*' + screen.height +
    '<br>Surface disponible : ' + screen.availWidth + '*' + screen.availHeight +
    '<br>Palette de couleur : ' + screen.colorDepth +
    '<br>Résolution : ' + screen.pixelDepth;


