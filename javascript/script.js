// Utiliser les opérateurs de comparaison
let x = 4;
let y = 0;

let test1 = x == 4;
let test2 = x === 4;
let test3 = x == '4';
let test4 = x === '4';
let test5 = x != '4';
let test6 = x != '4';
let test7 = x > 4;
let test8 = x >= 4;
let test9 = x < 4;

document.getElementById('p1').innerText = 'Valeur dans x égale à 4 (en valeur) ? : ' + test1;
document.getElementById('p2').innerText = 'Valeur dans x égale à 4 (en valeur & type) ? : ' + test2;
document.getElementById('p3').innerText = 'Valeur dans x égale à "4" (en valeur) ? : ' + test3;
document.getElementById('p4').innerText = 'Valeur dans x égale à "4" (en valeur & type) ? : ' + test4;
document.getElementById('p5').innerText = 'Valeur dans x différente à "4" (en valeur) ? : ' + test5;
document.getElementById('p6').innerText = 'Valeur dans x différente à "4" (en valeur & type) ? : ' + test6;
document.getElementById('p7').innerText = 'Valeur dans x strictement supérieure à 4 (en valeur) ? : ' + test7;
document.getElementById('p8').innerText = 'Valeur dans x supérieure à 4 (en valeur) ? : ' + test8;
document.getElementById('p9').innerText = 'Valeur dans x strictement inférieure à 4 (en valeur) ? : ' + test9;

// La condition if en JavaScript
let result;
if (x > 1) {
    result = 'x contient une valeur supérieure à 1';
}

if (x == y) {
    result += 'x et y contiennent la même valeur';
}

if (y) {
    result = 'La valeur de y est évaluée à true';
}

document.getElementById('p10').innerText = result;

// Inverser la valeur logique d’un test
let resultText;
if ((x > 1) == false) {
    resultText = 'x contient une valeur supérieure à 1';
}

if ((x == y) == false) {
    if (!resultText) {
        resultText = 'x et y contiennent la même valeur';
    } else {
        resultText += '\nx et y contiennent la même valeur';
    }
}

if (y == false) {
    if (!resultText) {
        resultText = 'La valeur de y est évaluée à true';
    } else {
        resultText += '\nLa valeur de y est évaluée à true';
    }
}

document.getElementById('p11').innerText = resultText;

// Présentation et utilisation des opérateurs logiques
let v = 5;
let w = -20;

if (v >= 0 && v <= 10) {
    document.getElementById('p12').innerHTML = 'x contient une valeur comprise entre 0 et 10';
}

if (w < -10 || w > 10) {
    document.getElementById('p13').innerHTML = 'y contient une valeur plus petite que -10 ou plus grande que 10';
}

if (!(x <= 2)) {
    document.getElementById('p14').innerHTML = 'x contient une valeur strictement supérieure à 2';
}

// Syntaxe et exemple utilisation du switch en JavaScript
let u = 15;
let switchValue = 'u stocke la valeur ';

switch (u) {
    case 2 :
        switchValue += u;
        document.getElementById('p15').innerHTML = switchValue;
        break;
    case 5 :
        switchValue += u;
        document.getElementById('p15').innerHTML = switchValue;
        break;
    case 10 :
        switchValue += u;
        document.getElementById('p15').innerHTML = switchValue;
        break;
    case 15 :
        switchValue += u;
        document.getElementById('p15').innerHTML = switchValue;
        break;
    case 20 :
        switchValue += u;
        document.getElementById('p15').innerHTML = switchValue;
        break;
    default:
        document.getElementById('p15').innerHTML = 'x ne stocke ni 2, ni 5, ni 10, ni 20';
}

/* Sans break, le JavaScript continuerait à tester les différents autres case du switch même si un case égal à
 la valeur de la variable a été trouvé, ce qui ralentirait inutilement le code et pourrait produire des comportements
 non voulus.
 */

// Présentation des boucles et opérateurs d’incrémentation et de décrémentation
// Les opérateurs d’incrémentation et de décrémentation
let a = 10, b = 10, c = 20, d = 20;

document.getElementById('p16').innerHTML = 'a stocke la valeur ' + a++;
document.getElementById('p17').innerHTML = 'b stocke la valeur ' + ++b;
document.getElementById('p18').innerHTML = 'c stocke la valeur ' + c--;
document.getElementById('p19').innerHTML = 'd stocke la valeur ' + --d;
document.getElementById('p20').innerHTML =
    'a = ' + a + ', b = ' + b + ', c = ' + c + ', d = ' + d;

// Les boucles while, do…while, for et for…in et les instructions break et continue
// La boucle JavaScript while
let e = 0;
while (e < 10) {
    document.getElementById('p21').innerHTML +=
        'e stocke la valeur ' + e + ' lors du passage ' + (e+1) + ' dans la boucle <br>';
    e++;
}

// La boucle JavaScript do… while
let s = 0;
let f = 10, t =10;

do {
    document.getElementById('p22').innerHTML +=
        's stocke la valeur ' + s + ' lors du passage ' + (s+1) + ' dans la boucle <br>';
    s++;
} while (s < 10);

while (f < 10) {
    document.getElementById('p23').innerHTML +=
        'f stocke la valeur ' + f + ' lors du passage ' + (f+1) + ' dans la boucle <br>';
    f++
}

do {
    document.getElementById('p24').innerHTML +=
        't stocke la valeur ' + t + ' lors du passage ' + (t+1) + ' dans la boucle <br>';
    t++;
} while (t < 10);

// La boucle JavaScript for
for (let i = 0; i < 10; i++) {
    document.getElementById('p25').innerHTML +=
        'i stocke la valeur ' + i + ' lors du passage ' + (i+1) + ' dans la boucle <br>';
}

// Utiliser une instruction continue pour passer directement à l’itération suivante d’une boucle
for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        continue;
    }
    document.getElementById('p26').innerHTML +=
        'i stocke la valeur ' + i + ' lors du passage ' + (i+1) + ' dans la boucle <br>';
}

// Utiliser une instruction break pour sortir prématurément d’une boucle
for (let i = 0; i < 100; i++) {
    if (i == 13) {
        break;
    }
    document.getElementById('p27').innerHTML +=
        'i stocke la valeur ' + i + ' lors du passage ' + (i+1) + ' dans la boucle <br>';
}
