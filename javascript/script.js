// On déclare et on initialise la variable en même temps
let prenom = 'Pierre';

// On déclare la variable puis on l'initialise ensuite
let monAge;
monAge = 29;

/* On modifie la valeur stockée dans prenom.
 * Notre variable stocke désormais la valeur "Mathilde"
 */
prenom = 'Mathilde';

let monAge2 = '29';

document.getElementById('p1').innerHTML = 'Type de prenom : ' + typeof prenom;
document.getElementById('p2').innerHTML = 'Type de monAge : ' + typeof monAge;
document.getElementById('p3').innerHTML = 'Type de monAge : ' + typeof monAge2;

// Le type nombre ou Number
let x = 10;
let y = -2;
let z = 3.14;

// Le type de données booléen (Boolean)
let vrai = true;
let faux = false;

// Les types de valeurs Null et Undefined
let nul = null;
let ind;

document.getElementById('p4').innerHTML = 'Type de monAge : ' + typeof nul;
document.getElementById('p5').innerHTML = 'Type de monAge : ' + typeof ind;

// Les opérateurs arithmétiques
x = 2;
y = 3;
z = 4;

let a = x + 1;
let b = x + y;
let c = x - y;
let d = x * y;
let e = x / y;
let f = 5 % 3;
let g = x ** 3;

alert('a contient : ' + a +
    '\nb contient : ' + b +
    '\nc contient : ' + c +
    '\nd contient : ' + d +
    '\ne contient : ' + e +
    '\nf contient : ' + f +
    '\ng contient : ' + g);

// Les opérateurs d’affectation
let h = 2;
let i = 10;

h += 3;
i *= h;

alert('h stocke : ' + h + '\ni stocke : ' + i);
alert(`h stocke  ${h}
i stocke : ${i}
Leur somme vaut ${h + i}`);
