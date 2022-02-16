'use strict';
// JSON, AJAX et API Fetch
// Présentation de JSON
// Définition et création de modules JavaScript
// Objet JavaScript
let utilisateur = {
    "prenom": "Pierre",
    "nom": "Giraud",
    "adresse": {
        "rue": "30 Impasse des Lilas",
        "ville": "Toulon",
        "cp": 83000,
        "pays": "France"
    },
    "mails": [
        "pierre.giraud@edhec.com",
        "pierre@pierre-giraud.com"
    ]
};

//Conversion en chaine JSON
let json = JSON.stringify(utilisateur);

document.getElementById("resultat").innerHTML =
    "Type de la variable : " + typeof(json) + "<br>Contenu de la variable : " + json;

// Introduction à l’Ajax
// Création d'un objet XMLHttpRequest
let xhr = new XMLHttpRequest();

// Initialisation de la requête avec open()
xhr.open('GET', '/renseigner/une/url');

// Réponse au format JSON
xhr.responseType = "json";

xhr.withCredentials = true;

// Envoi de la requête
xhr.send();

// Traitement de la réponse reçue
xhr.onload = function () {
    // Si le statut HTTP n'est pas 200
    if (xhr.status != 200){
        // Affichage du statut et le message correspondant
        alert("Erreur " + xhr.status + " : " + xhr.statusText);
        // Si le statut HTTP est 200, affichage du nombre d'octets téléchargés et de la réponse
    }else{
        alert(xhr.response.length + " octets  téléchargés\n" + JSON.stringify(xhr.response));
    }
}

// Si la requête n'a pas pu aboutir
xhr.onerror = function () {
    alert("La requête a échoué");
}

// Pendant le téléchargement
xhr.onprogress = function (event) {
    // lengthComputable = booléen; true si la requête a une length calculable
    if (event.lengthComputable){
        // loaded = contient le nombre d'octets téléchargés
        // total = contient le nombre total d'octets à télécharger
        alert(event.loaded + " octets reçus sur un total de " + event.total);
    }
};

// Si vous travaillez en local, il est normal que la requête ci-dessus échoue (même en renseignant une bonne URL).
// Cela est dû à la politique CORS (Cross Origin Resource Sharing) qui interdit certaines requêtes pour protéger les
// utilisateurs. Nous reparlerons de cela plus tard.

// Présentation de l’API Fetch
// Présentation de l’API Fetch et de la méthode fetch()
fetch("une/url",
    {
        method: "GET", // ou POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "text/plain;charset=UTF-8" // pour un corps de type chaine
        },
        body: undefined, // ou string, FormData, Blob, BufferSource, ou URLSearchParams
        referrer: "about:client", // ou "" (pas de réferanr) ou une url de l'origine
        referrerPolicy: "no-referrer-when-downgrade", // ou no-referrer, origin, same-origin...
        mode: "cors", // ou same-origin, no-cors
        credentials: "same-origin", // ou omit, include
        cache: "default", // ou no-store, reload, no-cache, force-cache, ou only-if-cached
        redirect: "follow", // ou manual ou error
        integrity: "", // ou un hash comme "sha256-abcdef1234567890"
        keepalive: false, // ou true pour que la requête survive à la page
        signal: undefined // ou AbortController pour annuler la requête
    })
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Error : " + error));