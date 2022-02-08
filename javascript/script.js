// Exercice 1
let grammes = document.getElementById('grammes');
let kilos = document.getElementById('kilos');
let livres = document.getElementById('livres');

grammes.addEventListener('input', function (){convertValues(this.id, this.value)});
kilos.addEventListener('input', function (){convertValues(this.id, this.value)});
livres.addEventListener('input', function (){convertValues(this.id, this.value)});

function convertValues(id, poids) {
    if (id == 'grammes') {
        kilos.value = poids / 1000;
        livres.value = poids * 0.0022046;
    } else if (id == 'kilos') {
        grammes.value = poids * 1000;
        livres.value = poids * 2.2046;
    } else if (id == 'livres') {
        kilos.value = poids / 2.2046;
        grammes.value = poids / 0.0022046;
    }
}