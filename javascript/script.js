'use strict';
// L'API Canvas
// L’élément HTML canvas et l’API Canvas
// L’élément HTML canvas
// Dessiner dans un canevas en JavaScript la théorie
let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');

// Dessiner des rectangles dans un canevas
// Dessiner un rectangle vide
let canvas2 = document.getElementById('c2');
let ctx2 = canvas2.getContext('2d');

ctx2.strokeStyle = '#4444CC';
ctx2.strokeRect(50, 25, 200, 100);

// Dessiner un rectangle plein
let canvas3 = document.getElementById('c3');
let ctx3 = canvas3.getContext('2d');

ctx3.fillStyle = '#4444CC';
ctx3.fillRect(50, 25, 200, 100);

// Dessiner plusieurs rectangles dans le canevas
let canvas4 = document.getElementById('c4');
let ctx4 = canvas4.getContext('2d');

ctx4.fillStyle = '#4444CC';
ctx4.fillRect(50, 25, 200, 100);

ctx4.fillStyle = '#DDDD44';
ctx4.fillRect(350, 25, 200, 100);

ctx4.strokeStyle = 'purple';
ctx4.strokeRect(50, 175, 200, 100);

ctx4.strokeRect(350, 175, 200, 100);

// Effacer une zone rectangulaire dans le canevas
ctx4.clearRect(150, 75, 300, 150);

// Définir des tracés et dessiner des formes
// Dessiner une ligne
let canvas5 = document.getElementById('c5');
let ctx5 = canvas5.getContext('2d');

ctx5.beginPath();
ctx5.moveTo(50, 25);
ctx5.lineTo(250, 125);
ctx5.strokeStyle = '#4488EE';
ctx5.lineWidth = 3;
ctx5.stroke();

// Dessiner des figures en utilisant plusieurs lignes à la suite
let canvas6 = document.getElementById('c6');
let ctx6 = canvas6.getContext('2d');

ctx6.beginPath();
ctx6.moveTo(25, 25);
ctx6.lineTo(25, 125);
ctx6.lineTo(125, 125);
ctx6.lineTo(25, 25);
ctx6.strokeStyle = '#4488EE';
ctx6.lineWidth = 3;
ctx6.closePath();
ctx6.stroke();

ctx6.beginPath();
ctx6.moveTo(275, 25);
ctx6.lineTo(275, 125);
ctx6.lineTo(175, 125);
ctx6.lineTo(275, 25);
ctx6.fillStyle = 'red';
ctx6.fill();

ctx6.beginPath();
ctx6.moveTo(150, 25);
ctx6.lineTo(150, 125);
ctx6.strokeStyle = 'black';
ctx6.lineWidth = 1;
ctx6.closePath();
ctx6.stroke();

// Dessiner plusieurs lignes avec des arrivées et origines différentes
let canvas7 = document.getElementById('c7');
let ctx7 = canvas7.getContext('2d');

ctx7.beginPath();
ctx7.moveTo(50, 25);
ctx7.lineTo(250, 25);
ctx7.moveTo(275, 50);
ctx7.lineTo(275, 100);
ctx7.moveTo(250, 125);
ctx7.lineTo(50, 125);
ctx7.moveTo(25, 100);
ctx7.lineTo(25, 50);
ctx7.strokeStyle = 'black';
ctx7.lineWidth = 1;
ctx7.stroke();

// Dessiner des arcs de cercle
let canvas8 = document.getElementById('c8');
let ctx8 = canvas8.getContext('2d');

ctx8.beginPath();
ctx8.lineWidth = 5;
ctx8.strokeStyle = '#4C8';
ctx8.arc(50, 50,35, 0.8*Math.PI, 2*Math.PI);
ctx8.closePath();
ctx8.stroke();

ctx8.beginPath();
ctx8.lineWidth = 5;
ctx8.fillStyle = '#A4A';
ctx8.arc(150, 85,40, 0, 2*Math.PI);
ctx8.fill();

ctx8.beginPath();
ctx8.lineWidth = 5;
ctx8.strokeStyle = '#48C';
ctx8.arc(250, 50,35, 0.2*Math.PI, Math.PI, true);
ctx8.closePath();
ctx8.stroke();

let canvas9 = document.getElementById('c9');
let ctx9 = canvas9.getContext('2d');

ctx9.beginPath();
ctx9.lineWidth = 5;
ctx9.strokeStyle = '#A4A';
moveTo(50, 25);
ctx9.arcTo(50, 125,250, 50, 50);
ctx9.stroke();

// Création de dégradés ou de motifs
// Créer un dégradé linéaire dans un canevas
let canvas10 = document.getElementById('c10');
let ctx10 = canvas10.getContext('2d');

let lineaire = ctx10.createLinearGradient(25, 25, 100, 25);
lineaire.addColorStop(0, '#4C8');
lineaire.addColorStop(0.5, '#48C');
lineaire.addColorStop(1, '#A4A');

ctx10.fillStyle = lineaire;
ctx10.fillRect(25, 25, 75, 100);
let lineaire2 = ctx10.createLinearGradient(150, 25, 275, 125);
lineaire2.addColorStop(0, '#DD4');
lineaire2.addColorStop(1, '#D44');

ctx10.beginPath();
ctx10.moveTo(150, 25);
ctx10.lineTo(150, 125);
ctx10.lineTo(275, 125);
ctx10.fillStyle = lineaire2;
ctx10.fill();

// Créer un dégradé radial dans un canevas
let canvas11 = document.getElementById('c11');
let ctx11 = canvas11.getContext('2d');

let radial = ctx11.createRadialGradient(150, 75,10, 150, 75, 50);
radial.addColorStop(0, '#DD4');
radial.addColorStop(1, '#D44');
ctx11.beginPath();
ctx11.fillStyle = radial;
ctx11.arc(150, 75, 50, 0, 2*Math.PI);
ctx11.fill();

// Création d’un motif dans le canevas
let canvas12 = document.getElementById('c12');
let ctx12 = canvas12.getContext('2d');

let img = new Image();
img.src = 'https://www.pierre-giraud.com/wp-content/uploads/2019/06/emoji-smile.png';
img.onload = function() {
    let pattern = ctx12.createPattern(img, 'repeat');
    ctx12.fillStyle = pattern;
    ctx12.fillRect(0, 0, 300, 300);
};

// Ombres et transparence dans un canevas
// Gérer la transparence de nos dessins
let canvas13 = document.getElementById('c13');
let ctx13 = canvas13.getContext('2d');

ctx13.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx13.fillRect(25, 25, 100, 100);

ctx13.fillStyle = 'rgba(255, 0, 0)';
ctx13.fillRect(150, 25, 100, 100);

let canvas14 = document.getElementById('c14');
let ctx14 = canvas14.getContext('2d');

ctx14.globalAlpha = 0.5;

ctx14.fillStyle = 'rgba(255, 0, 0)';
ctx14.fillRect(25, 25, 100, 100);

ctx14.fillStyle = 'rgba(0, 0, 255)';
ctx14.fillRect(150, 25, 100, 100);

// Ajouter des ombres à nos figures
let canvas15 = document.getElementById('c15');
let ctx15 = canvas15.getContext('2d');

ctx15.shadowColor = 'red';
ctx15.shadowOffsetX = 5;
ctx15.shadowOffsetY = 15;
ctx15.shadowBlur = 10;

ctx15.fillStyle = 'rgb(255, 0, 0)';
ctx15.fillRect(25, 25, 100, 100);

ctx15.fillStyle = 'rgb(255, 0, 0, 0.5)';
ctx15.fillRect(175, 25, 100, 100);

// Ajouter du texte ou une image dans un canevas
// Dessiner du texte dans un canevas
let canvas16 = document.getElementById('c16');
let ctx16 = canvas16.getContext('2d');

ctx16.font = 'bold 20px Verdana, Arial, serif';

ctx16.strokeStyle = '#48B';
ctx16.strokeText('Texte creux', 25, 50);

ctx16.font = 'bold 20px Verdana, Arial, serif';
ctx16.fillStyle = '#48B';
ctx16.textAlign = 'center';
ctx16.fillText('Texte plein', 150, 100);

// Insérer une image dans un canevas
let canvas17 = document.getElementById('c17');
let ctx17 = canvas17.getContext('2d');

let image = document.getElementById('sunset');

image.addEventListener('load', function(){
    ctx17.drawImage(image, 75, 25, 150, 100);
}, false);

// Appliquer des transformations à un canevas
// Effectuer une translation du canevas
let canvas18 = document.getElementById('c18');
let ctx18 = canvas18.getContext('2d');

ctx18.fillStyle = '#48A';
ctx18.fillRect(25, 25, 75, 75);

ctx18.translate(175, 25);

ctx18.fillStyle = 'rgb(64, 192, 128)';
ctx18.fillRect(25, 25, 75, 75);

// Effectuer une rotation du canevas
let canvas19 = document.getElementById('c19');
let ctx19 = canvas19.getContext('2d');

ctx19.translate(150, 75);

ctx19.fillStyle = '#48B';
ctx19.fillRect(0, 0, 50, 50);

ctx19.rotate(Math.PI/2);
ctx19.fillStyle = '#4B8';
ctx19.fillRect(0, 0, 50, 50);

ctx19.rotate(Math.PI/2);
ctx19.fillStyle = '#C00';
ctx19.fillRect(0, 0, 50, 50);

ctx19.rotate(Math.PI/2);
ctx19.fillStyle = '#DD2';
ctx19.fillRect(0, 0, 50, 50);

// Enregistrer l’état courant du canevas et restaurer un état précédent
let canvas20 = document.getElementById('c20');
let ctx20 = canvas20.getContext('2d');

ctx20.translate(150, 75);

ctx20.save();

ctx20.fillStyle = '#48B';
ctx20.fillRect(0, 0, 50, 50);

ctx20.rotate(Math.PI/2);
ctx20.fillStyle = '#4B8';
ctx20.fillRect(0, 0, 50, 50);

ctx20.rotate(Math.PI/2);
ctx20.fillStyle = '#C00';
ctx20.fillRect(0, 0, 50, 50);

ctx20.restore();

ctx20.rotate(Math.PI/2);
ctx20.fillStyle = '#DD2';
ctx20.fillRect(0, 0, 50, 50);

// Effectuer des transformations complètes du canvas
let canvas21 = document.getElementById('c21');
let ctx21 = canvas21.getContext('2d');

ctx21.transform(1, 0, 1, 1, 25, 50);

ctx21.fillStyle = '#48B';
ctx21.fillRect(0, 0, 75, 50);

ctx21.fillStyle = '#4B8';
ctx21.fillRect(125, 0, 75, 50);

let canvas22 = document.getElementById('c22');
let ctx22 = canvas22.getContext('2d');

ctx22.transform(1, 0, 1, 1, 100, 50);

ctx22.fillStyle = '#48B';
ctx22.fillRect(0, 0, 75, 50);

ctx22.setTransform(1, 0, -1, 1, 100, 50);

ctx22.fillStyle = '#4B8';
ctx22.fillRect(0, 0, 75, 50);