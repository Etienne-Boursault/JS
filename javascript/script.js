// Expressions régulières
// Introduction aux expressions régulières
// Création d’une première expressions régulière et syntaxe des Regex

// Définition de deux masques de recherches c'est-à-dire deux expressions régulières de deux façons différentes
let masque1 = /Pierre/;
let masque2 = new RegExp('Pierre');

// Recherches et remplacements
// La méthode match() de l’objet String
// Intervalle ou "classe" de caractères permettant de trouver n'importe quelle lettre majuscule de l'alphabet classique
// (sans les accents ou cédille)
let chaine = 'Bonjour, je m\'appelle Pierre et vous ?';

let masque3 = /[A-Z]/;
let masque4 = /[A-Z]/g; // Ajout d'une option ou drapeau "globale"

// Recherche "Pierre" dans let chaine et renvoie la première correspondance
document.getElementById('p1').innerHTML = 'Trouvé : ' + chaine.match(masque1);

// Recherche toute majuscule dans let chaine et renvoie la première correspondance
document.getElementById('p2').innerHTML = 'Trouvé : ' + chaine.match(masque3);

// Recherche toute majuscule dans let chaine et renvoie toutes les correspondances
document.getElementById('p3').innerHTML = 'Trouvé : ' + chaine.match(masque4);

// La méthode search() de l’objet String
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');

p4.innerHTML = 'Trouvé en position : ' + chaine.search(masque1);
p5.innerHTML = 'Trouvé en position : ' + chaine.search(masque3);

// La méthode replace() de l’objet String
let masque5 = /e/;
let masque6 = /ou/g;

let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

p6.innerHTML = chaine.replace(masque1, 'Mathilde');
p7.innerHTML = chaine.replace(masque5, 'E');
p8.innerHTML = chaine.replace(masque6, 'OU');

// La méthode split() de l’objet String
// Dès qu'un espace, une virgule ou une apostrophe est rencontrée, la chaine de départ est découpée en une nouvelle
// sous chaine qui est placée dans un tableau
let masque7 = /[ ,']/;

let sousChaine = chaine.split(masque7);
let p9 = document.getElementById('p9');
p9.innerHTML = 'Premier élément du tableau : ' + sousChaine[0] +
    '<br>Deuxième élément du tableau : ' + sousChaine[1] +
    '<br>Troisième élément du tableau : ' + sousChaine[2];

// La méthode exec() de l’objet RegExp
let resultat = masque1.exec(chaine);
let p10 = document.getElementById('p10');

p10.textContent = 'Résultat : ' + resultat[0];

// La méthode test() de l’objet RegExp
let p11 = document.getElementById('p11');

if (masque1.test(chaine)) {
    p11.textContent = '"Pierre" trouvé dans la chaine';
}

// Classes de caractères et classes abrégées
// Les classes de caractères
let masque8 = /[aeiouy]/g; // Cherche une voyelle
let masque9 = /j[aeiouy]/g; // Cherche "j" suivi d'une voyelle
let masque10 = /[aeiouy][aeiouy]/g; // Cherche une suite de 2 voyelles

let p12 = document.getElementById('p12');
let p13 = document.getElementById('p13');
let p14 = document.getElementById('p14');

p12.textContent = 'Voyelles trouvées : ' + chaine.match(masque8);
p13.textContent = 'j + voyelle trouvés : ' + chaine.match(masque9);
p14.textContent = 'Suite de voyelles trouvées : ' + chaine.match(masque10);

// Les classes de caractères et les méta caractères
let chaine2 = 'Bonjour, je suis ^Pierre^. Mon /numéro/ est le [06-36-65-65-65]';

let masque11 = /[^aeiouy]/g; // Cherche autre chose qu'une voyelle
let masque12 = /[\^aeiouy]/g; // Cherche ^ ou une voyelle dans la chaine
let masque13 = /[aei^ouy]/g; // Cherche ^ ou une voyelle dans la chaine
let masque14 = /[a-z]o/g; // Cherche une lettre minuscule suivie d'un o
let masque15 = /[a-zA-z]o/g; // Cherche une lettre suivie d'un o
let masque16 = /[a\-z]/g; // Cherche "a", "-" ou "z"
let masque17 = /[0-9az-]/g; // Cherche un chiffre, "a", "-" ou "z"
let masque18 = /[0-9\/\[\]]/g; // Cherche un chiffre, "/", "[", "]"

let p15 = document.getElementById('p15');
let p16 = document.getElementById('p16');

p15.textContent = chaine2;
p16.innerHTML =
    'Autre chose qu\'une voyelle : ' + chaine2.match(masque11) +
    '<br>Une voyelle ou ^ dans la chaine : ' + chaine2.match(masque12) +
    '<br>Une voyelle ou ^ dans la chaine : ' + chaine2.match(masque13) +
    '<br>Une lettre minuscule suivie d\'un o : ' + chaine2.match(masque14) +
    '<br>Une lettre suivie d\'un o : ' + chaine2.match(masque15) +
    '<br>Un "a", "-" ou "z" : ' + chaine2.match(masque16) +
    '<br>Un chiffre, "a", "-" ou "z" : ' + chaine2.match(masque17) +
    '<br>Un chiffre, "/", "[", "]" : ' + chaine2.match(masque18);

// Les classes de caractères abrégées ou prédéfinies
let masque19 = /\w/g; // Correspond à un caractère alphanumérique ou "_"
let masque20 = /\W/g; // Correspond à tout sauf à un caractère alphanumérique ou "_"
let masque21 = /\d/g; // Correspond à un chiffre
let masque22 = /[\da-z]/g; // Correspond à un chiffre ou une lettre minuscule

let p17 = document.getElementById('p17');

p17.innerHTML =
    'Lettre, chiffre, ou "-" : ' + chaine2.match(masque19) +
    '<br>Tout sauf lettre, chiffre, ou "-" : ' + chaine2.match(masque20) +
    '<br>Chiffres : ' + chaine2.match(masque21) +
    '<br>Chiffres ou lettre minuscule : ' + chaine2.match(masque22);

// Les métacaractères
// Le point
let chaine3 = 'Bonjour, je suis ^Pierre^. Mon no. est le [06-36-65-65-65]';
let masque23 = /o./g; // Un "o" suivi par n'importe quel caractère sauf \n
let masque24 = /o\./g; // Un "o" suivi d'un point
let masque25 = /o[.]/g; // Un "o" suivi d'un point
let masque26 = /[o.]/g; // Un "o" ou un point

let p18 = document.getElementById('p18');
p18.innerHTML =
    'Résultat Masque 23 : ' + chaine3.match(masque23) +
    '<br>Résultat Masque 24 : ' + chaine3.match(masque24) +
    '<br>Résultat Masque 25 : ' + chaine3.match(masque25) +
    '<br>Résultat Masque 26 : ' + chaine3.match(masque26);

// Les alternatives
let masque27 = /o|j/g; // Un "o" ou un "j"
let masque28 = /Pierre|Mathilde/g; // "Pierre" ou "Mathilde"
let p19 = document.getElementById('p19');

p19.innerHTML =
    'Résultat Masque 27 : ' + chaine2.match(masque27) +
    '<br>Résultat Masque 28 : ' + chaine2.match(masque28);

// Les ancres
let chaine4 = 'Bonjour, je suis Pierre a^$b. Mon no. est le [06-36-65-65-65]';
let p20 = document.getElementById('p20');
let p21 = document.getElementById('p21');

let masque29 = /^./g; // N'importe quel caractère en début de chaine sauf \n
let masque30 = /^[A-Z]/g; // Une majuscule en début de chaine
let masque31 = /.$/g; // N'importe quel caractère en fin de chaine sauf \n
let masque32 = /a\^\$b/g; // "a^$b" dans la chaine
let masque33 = /[e$]/g; // "e" ou "$" dans la chaine
let masque34 = /^[^a-z]/g; // Autre chose qu'une minuscule en début de chaine
let masque35 = /^...$/; // Trois caractères exactement sans retour à la ligne

p20.textContent = chaine4;
p21.innerHTML =
    '<br>Résultat masque 29 : ' + chaine4.match(masque29) +
    '<br>Résultat masque 30 : ' + chaine4.match(masque30) +
    '<br>Résultat masque 31 : ' + chaine4.match(masque31) +
    '<br>Résultat masque 32 : ' + chaine4.match(masque32) +
    '<br>Résultat masque 33 : ' + chaine4.match(masque33) +
    '<br>Résultat masque 34 : ' + chaine4.match(masque34) +
    '<br>Résultat masque 35 : ' + chaine4.match(masque35);

// Les quantificateurs
let chaine5 = 'Bonjour, je suis Pierre a^$b. \nMon no. est le [06-36-65-65-65]';
let chaine6 = '0636656565';
let p22 = document.getElementById('p22');

let masque36 = /er?/g; // Un "e" suivi de 0 ou 1 "r"
let masque37 = /er+/g; // Un "e" suivi d'au moins un "r"
let masque38 = /^[A-Z].{10,}/g; // Une lettre en majuscule au début puis 10 caractères minimum à part un retour à la ligne
let masque39 = /^\d{10,10}$/; // Uniquement et exactement 10 chiffres

p22.innerHTML =
    'Résultat masque 36 : ' + chaine5.match(masque36) +
    '<br>Résultat masque 37 : ' + chaine5.match(masque37) +
    '<br>Résultat masque 38 : ' + chaine5.match(masque38) +
    '<br>Résultat masque 39 : ' + chaine6.match(masque39);

// Sous masques et assertions
// Les sous masques
let chaine7 = 'Bonjour, je suis Pierre et mon no. est le [06-36-65-65-65]';
let masque40 = /er|t/g; // "er" ou "t"
let masque41 = /e(r|t)/; // "er" ou "et" + capture r ou t
let masque42 = /Bon(jour)/; // "Bonjour" + capture "jour"
let masque43 = /Bon(jour)/g; // "Bonjour" + capture "jour"

let p23 = document.getElementById('p23');
let p24 = document.getElementById('p24');

p23.textContent = chaine7;
p24.innerHTML =
    'Résultat Masque 40 : ' + chaine7.match(masque40) +
    '<br>Résultat Masque 41 : ' + chaine7.match(masque41) +
    '<br>Résultat Masque 42 : ' + chaine7.match(masque42) +
    '<br>Résultat Masque 43 : ' + chaine7.match(masque43);

// Les assertions
let masque44 = /e(?=r)/g; // Permet de chercher "e" suivi de "r"
let masque45 = /e(?!r)/g; // Permet de chercher "e" non suivi de "r"
let masque46 = /(?<=i)s/g; // Permet de chercher "s" précédé de "i"
let masque47 = /(?<!i)s/g; // Permet de chercher "s" non précédé de "i"

p25 = document.getElementById('p25');
p25.innerHTML =
    'Masque 44 : ' + chaine7.match(masque44) +
    '<br>Résultat Masque 45 : ' + chaine7.match(masque45) +
    '<br>Résultat Masque 46 : ' + chaine7.match(masque46) +
    '<br>Résultat Masque 47 : ' + chaine7.match(masque47);

// Les options
// Liste des options disponibles et exemples d’utilisation
let chaine8 = 'Bonjour, je suis Pierre\n et mon no. est le [06-36-65-65-65]';
let masque48 = /pierre/; // Cherche "pierre" exactement
let masque49 = /pierre/i; // Cherche "pierre" peu importe la casse
let masque50 = /e$/; // Cherche "e" en fin de chaine
let masque51 = /e$/gm; // Cherche "e" en fin de chaque ligne
let masque52 = /./gs; // Cherche tout caractère et effectue une recherche globale

let p26 = document.getElementById('p26');
let p27 = document.getElementById('p27');

p26.textContent = chaine8;
p27.innerHTML =
    'Résultat Masque 48 : ' + chaine8.match(masque48) +
    '<br>Résultat Masque 49 : ' + chaine8.match(masque49) +
    '<br>Résultat Masque 50 : ' + chaine8.match(masque50) +
    '<br>Résultat Masque 51 : ' + chaine8.match(masque51) +
    '<br>Résultat Masque 52 : ' + chaine8.match(masque52);
