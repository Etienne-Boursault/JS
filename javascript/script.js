// Valeurs primitives et objets Globaux
// Définition des valeurs primitives et différence avec les objets
let ch1 = 'Une chaine de caractères';
let ch2 = 'Une chaine de caractères';

document.getElementById('p1').innerHTML = 'ch1 == ch2 ? : ' + (ch1 == ch2);

let ob1 = {prenom: 'Pierre'};
let ob2 = {prenom: 'Pierre'};
let ob3 = ob1;

document.getElementById('p2').innerHTML = 'ob1 === ob2 ? : ' + (ob1 === ob2);
document.getElementById('p3').innerHTML = 'ob1 === ob3 ? : ' + (ob1 === ob3);

let ch3 = new String('Une chaine de caractères');

document.getElementById('p4').innerHTML = 'Type de ch1 : ' + typeof (ch1) + '\nType de ch2 : ' + typeof (ch3);

// Valeur primitive ou objet : que préférer ?
document.getElementById('p5').innerHTML = ch3.length;
document.getElementById('p6').innerHTML = ch3.toUpperCase();
document.getElementById('p7').innerHTML = ch3;
document.getElementById('p8').innerHTML = ch1.length;
document.getElementById('p9').innerHTML = ch1.toUpperCase();
document.getElementById('p10').innerHTML = ch1;

// Propriétés et méthodes de l’objet global String
// Les propriétés de l’objet String
let ch4 = 'Pierre';
let ch5 = 'Pierre Giraud';
document.getElementById('p11').innerHTML = 'ch4.length = ' + ch4.length;
document.getElementById('p12').innerHTML = 'ch5.length = ' + ch5.length;

// Les méthodes de l’objet String
// La méthode includes()
let prez = 'Bonjour, je m\'appelle Pierre et j\'ai 29 ans';

if (prez.includes('Pierre')) {
    document.getElementById('p14').textContent = '"Pierre" est présent dans let prez';
}

if (prez.includes('pierre')) {
    document.getElementById('p15').textContent = '"pierre" est présent dans let prez';
}

// Les méthodes startsWith() et endsWith()

if (prez.startsWith('Bonjour')) {
    document.getElementById('p16').textContent = 'La chaine commence par "Bonjour"';
}

if (prez.endsWith('29 ans')) {
    document.getElementById('p17').textContent = 'La chaine termine par "29 ans"';
}

// La méthode substring()

document.getElementById('p18').textContent = prez.substring(9);
document.getElementById('p19').textContent = prez.substring(9, 29);
document.getElementById('p20').textContent = prez.substring(29, 9);

// Les méthodes indexOf() et lastIndexOf()

document.getElementById('p21').textContent = prez.indexOf('e');
document.getElementById('p22').textContent = prez.indexOf('Salut');
document.getElementById('p23').textContent = prez.lastIndexOf('e');

// La méthode slice()

document.getElementById('p24').textContent = prez.slice(0, 29);
document.getElementById('p25').textContent = prez.slice(29, 9);
document.getElementById('p26').textContent = prez.slice(-34, -14);

// La méthode replace()

document.getElementById('p27').textContent = prez.replace('29', '30');
document.getElementById('p28').textContent = prez.replace('e', 'E');

// Les méthodes toLowerCase() et toUpperCase()

document.getElementById('p29').textContent = prez.toUpperCase();
document.getElementById('p30').textContent = prez.toLowerCase();

// La méthode trim()

let prez2 = '           Bonjour, je m\'appelle Pierre et j\'ai 29 ans          ';
document.getElementById('p31').textContent = prez2.trim();
document.getElementById('p32').textContent = prez2;

// Propriétés et méthodes de l’objet global Number
// Les propriétés de l’objet Number

document.getElementById('p33').innerHTML =
    'MIN_VALUE : ' + Number.MIN_VALUE
    + '<br>MAX_VALUE : ' + Number.MAX_VALUE
    + '<br>MIN_SAFE_INTEGER : ' + Number.MIN_SAFE_INTEGER
    + '<br>MAX_SAFE_INTEGER : ' + Number.MAX_SAFE_INTEGER
    + '<br>NEGATIVE_INFINITY : ' + Number.NEGATIVE_INFINITY
    + '<br>POSITIVE_INFINITY : ' + Number.POSITIVE_INFINITY
    + '<br>NaN : ' + Number.NaN;

// Les méthodes de l’objet Number
// La méthode isFinite()
let nb1 = 10;
let nb2 = Number.POSITIVE_INFINITY;

if (Number.isFinite(nb1)) {
    document.getElementById('p34').textContent = 'Le nombre ' + nb1 + ' est fini';
}

if (!Number.isFinite(nb2)) {
    document.getElementById('p35').textContent = 'Le nombre ' + nb2 + ' n\'est pas fini';
}

// La méthode isInteger()
let nb3 = 10.5;

if (Number.isInteger(nb1)) {
    document.getElementById('p36').textContent = 'Le nombre ' + nb1 + ' est un entier';
}

if (!Number.isInteger(nb3)) {
    document.getElementById('p37').textContent = 'Le nombre ' + nb3 + ' n\'est pas un entier';
}

// La méthode isNaN()
let nb4 = NaN;

if (!Number.isNaN(nb1)) {
    document.getElementById('p38').textContent = 'Le nombre ' + nb1 + ' ne stocke pas la valeur Nan';
}

if (Number.isNaN(nb4)) {
    document.getElementById('p39').textContent = 'Le nombre ' + nb4 + ' stocke la valeur Nan';
}

// La méthode isSafeInteger()
let nb5 = 1000000000000000000;

if (Number.isSafeInteger(nb1)) {
    document.getElementById('p40').textContent = 'Le nombre ' + nb1 + ' stocke un entier sûr';
}

if (!Number.isSafeInteger(nb5)) {
    document.getElementById('p41').textContent = 'Le nombre ' + nb5 + ' ne stocke pas un entier sûr';
}

// La méthode parseFloat()
let nb6 = '29 Pierre';
let nb7 = '29.5 Pierre 30';
let nb8 = 'Pierre 29';

document.getElementById('p42').textContent = Number.parseFloat(nb6);
document.getElementById('p43').textContent = Number.parseFloat(nb7);
document.getElementById('p44').textContent = Number.parseFloat(nb8);

// La méthode parseInt()

document.getElementById('p45').textContent = Number.parseInt('0F', 16);
document.getElementById('p46').textContent = Number.parseInt('FFF', 16);
document.getElementById('p47').textContent = Number.parseInt('1000', 2);

// La méthode toFixed()
let nb9 = 1234.450;

document.getElementById('p48').textContent = nb9.toFixed(0);
document.getElementById('p49').textContent = nb9.toFixed(1);
document.getElementById('p50').textContent = nb9.toFixed(2);

// La méthode toPrecision()

document.getElementById('p51').textContent = nb9.toPrecision(2);
document.getElementById('p52').textContent = nb9.toPrecision(4);
document.getElementById('p53').textContent = nb9.toPrecision(6);

// La méthode toString()
let nb10 = 255;

document.getElementById('p54').textContent = nb9.toString(16);
document.getElementById('p55').textContent = nb9.toString(2);
document.getElementById('p56').textContent = typeof (nb10.toString(2));

// Propriétés et méthodes de l’objet global Math

document.getElementById('p57').innerHTML =
    'E : ' + Math.E
    + '<br>LN2 : ' + Math.LN2
    + '<br>LN10 : ' + Math.LN10
    + '<br>LOG2E : ' + Math.LOG2E
    + '<br>LOG10E : ' + Math.LOG10E
    + '<br>PI : ' + Math.PI
    + '<br>SQRT1_2 : ' + Math.SQRT1_2
    + '<br>SQRT2 : ' + Math.SQRT2;

// Les méthodes de l’objet Math
// Les méthodes floor(), ceil(), round() et trunc()
let nb11 = 12.456;
let nb12 = 2.45;
let nb13 = 2.54;

document.getElementById('p58').innerHTML = 'Nombre : ' + nb11 + '<br> floor () : ' + Math.floor(nb11) +
    '<br> ceil() : ' + Math.ceil(nb11) + '<br> round () : ' + Math.round(nb11) + '<br> trunc() : ' + Math.trunc(nb11);
document.getElementById('p59').innerHTML = 'Nombre : ' + nb12 + '<br> floor () : ' + Math.floor(nb12) +
    '<br> ceil() : ' + Math.ceil(nb12) + '<br> round () : ' + Math.round(nb12) + '<br> trunc() : ' + Math.trunc(nb12);
document.getElementById('p60').innerHTML = 'Nombre : ' + nb13 + '<br> floor () : ' + Math.floor(nb13) +
    '<br> ceil() : ' + Math.ceil(nb13) + '<br> round () : ' + Math.round(nb13) + '<br> trunc() : ' + Math.trunc(nb13);

// La méthode random()

document.getElementById('p61').innerHTML = Math.random();
document.getElementById('p62').innerHTML = Math.random() * 100;
document.getElementById('p63').innerHTML = Math.round(Math.random() * 100);

// Les méthodes min() et max()

document.getElementById('p64').innerHTML = Math.min(50, 2.5, 5, 14);
document.getElementById('p65').innerHTML = Math.min(2, 7.2, -12, -5);
document.getElementById('p66').innerHTML = Math.max(2, 75, -156);

// La méthode abs()

document.getElementById('p67').innerHTML = Math.abs(4);
document.getElementById('p68').innerHTML = Math.abs(-4);
document.getElementById('p69').innerHTML = Math.abs('Pierre');

// Les méthodes cos(), sin(), tan(), acos(), asin() et atan()

document.getElementById('p70').innerHTML = Math.cos(0);
document.getElementById('p71').innerHTML = Math.cos(Math.PI / 2);
document.getElementById('p72').innerHTML = Math.cos(Math.PI);

// Les méthodes exp() et log()

document.getElementById('p73').innerHTML = Math.exp(0);
document.getElementById('p74').innerHTML = Math.exp(1);
document.getElementById('p75').innerHTML = Math.log(1);

// Présentation des tableaux et de l’objet global Array
// Création d’un tableau en JavaScript

let prenoms = ['Pierre', 'Mathilde', 'Florain', 'Camille'];
let ages = [29, 27, 29, 30];
let produits = ['Livre', 20, 'Ordinateur', 5, ['Magnets', 100]];

// Accéder à une valeur dans un tableau

document.getElementById('p76').innerHTML = prenoms[0] + ' possède 1 ' + produits[2];
document.getElementById('p77').innerHTML = prenoms[1] + ' a ' + ages[1] + 'ans';
document.getElementById('p78').innerHTML = produits[4][1] + ' ' + produits[4][0];

// Utiliser une boucle for…of pour parcourir toutes les valeurs d’un tableau

for (let valeur of prenoms) {
    document.getElementById('p79').innerHTML += valeur + '<br>';
}

// Tableaux associatifs en JavaScript, objets littéraux et boucle for… in
let pierre = {
    'prenoms': 'Pierre',
    'age': 29,
    'sport': 'trail',
    'cours': ['HTML', 'CSS', 'JS']
};

for (let propriete in pierre) {
    document.getElementById('p80').innerHTML += pierre[propriete] + '<br>';
}

// Les propriétés et les méthodes du constructeur Array()
// Les méthodes push() et pop()
let prenomsArray = ['Pierre', 'Mathilde'];
let agesArray = [29, 27, 32];

let taille = prenomsArray.push('Florian', 'Camille');
let del = agesArray.pop();

document.getElementById('p81').innerHTML = taille + ' éléments dans prenomsArray';
document.getElementById('p82').innerHTML = '"' + del + '" supprimé de agesArray';

// Les méthodes unshift() et shift()
let tailleUnshift = prenomsArray.unshift('Florian', 'Camille');
let delShift = agesArray.shift();

document.getElementById('p83').innerHTML = prenomsArray;
document.getElementById('p84').innerHTML = tailleUnshift + ' éléments dans prenomsArray';
document.getElementById('p85').innerHTML = '"' + delShift + '" supprimé de agesArray';

// La méthode splice()
agesArray.push(29, 28, 30);
prenomsArray.splice(2, 0, 'Thomas', 'Manon');
let delSplice = agesArray.splice(1, 2, 35);

document.getElementById('p86').innerHTML = prenomsArray;
document.getElementById('p87').innerHTML = agesArray;
document.getElementById('p88').innerHTML = '"' + delSplice + '" supprimé de agesArray';

// La méthode join()
document.getElementById('p89').innerHTML = prenomsArray.join(' - ');
document.getElementById('p90').innerHTML = agesArray.join(' / ');
document.getElementById('p91').innerHTML = '"' + delSplice + '" supprimé de agesArray';

// La méthode slice()
let slicePrenoms = prenomsArray.slice(2, 4);
let sliceAges = agesArray.slice(2);

document.getElementById('p92').innerHTML = slicePrenoms.join(' - ');
document.getElementById('p93').innerHTML = sliceAges.join(' / ');

// La méthode concat()
let sports = ['Trail', 'Triathlon', 'Natation'];
let tbglobal = prenoms.concat(agesArray, sports);

document.getElementById('p94').innerHTML = tbglobal.join(' - ');

// La méthode includes()

if (prenomsArray.includes('Mathilde')) {
    document.getElementById('p95').innerHTML = 'Mathilde est dans le tableau';
}

if (!prenomsArray.includes('mathilde')) {
    document.getElementById('p96').innerHTML = 'mathilde n\'est pas dans le tableau';
}

// L’objet global Date et les dates en JavaScript
// Récupérer la date actuelle
let date1 = Date();
let date2 = Date.now();

document.getElementById('p97').innerHTML = date1;
document.getElementById('p98').innerHTML = date2;

// Créer un objet de type date
let date3 = new Date();
let date4 = new Date('March 23, 2019 20:00:00');
let date5 = new Date(1553466000000);
let date6 = new Date(2019, 0, 25, 12, 30);

document.getElementById('p99').innerHTML =
    'Date 1 : ' + date3 +
    '<br>Date 2 : ' + date4 +
    '<br> Date 3 : ' + date5 +
    '<br> Date 4 : ' + date6;

// Les méthodes getters et setters de l’objet Date
// Les getters de l’objet Date
let date7 = new Date(2021, 0, 25, 12, 30, 15);

let jourSemaine = date7.getDay();
let jourMois = date7.getDate();
let mois = date7.getMonth();
let annee = date7.getFullYear();
let heures = date7.getHours();
let heuresUTC = date7.getUTCHours();
let minutes = date7.getMinutes();
let secondes = date7.getSeconds();
let ms = date7.getMilliseconds();

document.getElementById('p100').innerHTML =
    'Date : ' + date7 +
    '<br>Jour de la semaine : ' + jourSemaine +
    '<br>Jour du mois : ' + jourMois +
    '<br>Numéro du mois : ' + mois +
    '<br>Année : ' + annee +
    '<br>Heures : ' + heures +
    '<br>Heure UTC : ' + heuresUTC +
    '<br>Minutes : ' + minutes +
    '<br>Secondes : ' + secondes +
    '<br>Millisecondes : ' + ms;

// Les setters de l’objet Date
date7.setDate(31);
date7.setMonth(2);
date7.setFullYear(2020);
date7.setHours(10);
date7.setMinutes(0);
date7.setSeconds(0);
date7.setMilliseconds(0);

document.getElementById('p101').innerHTML = 'Date : ' + date7;

// Convertir une date au format local
let date8 = new Date();
let dateLocale = date8.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});

document.getElementById('p102').innerHTML = 'Date : ' + dateLocale;

