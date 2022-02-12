const compare = function(id, asc) {
    // les "row 1" & "row 2" sont bien liés à ma fonction sort().
    return function(row1, row2) {
        // Retourne la valeur de la cellule
        const tdValue = function (row, id) {
            return row.children[id].textContent;
        }

        // La fonction tri compare les valeurs v1 et v2 issues des tdValues et retourne les valeurs -1, 0 ou 1
        const tri = function (v1, v2) {
            if (v1 !== '' && v2 !== !isNaN(v1) && !isNaN(v2)){
                return v1 - v2;
            } else {
                console.log('tri --- v1 : ' + v1 + ' - v2 : ' + v2 + ' => v1.toString().localeCompare(v2) : ' + v1.toString().localeCompare(v2));
                return v1.toString().localeCompare(v2);
            }
        };
        return tri(tdValue(asc ? row1 : row2, id), tdValue(asc ? row2 : row1, id));
    }
}

const tbody = document.querySelector('tbody');
const thx = document.querySelectorAll('th');
const trxb = document.querySelectorAll('tbody tr');

thx.forEach(function(th) {
    th.addEventListener('click', function () {
        // Array.from(thx).indexOf(th) - Donne le numéro de la colonne du tableau et la trie
        arrayC = Array.from(thx).indexOf(th);
        console.log('th.addEventListener --- arrayC : ' + arrayC + ' - arrayC.valueOf() : ' + arrayC.valueOf());
        ascV = !this.asc;
        console.log('th.addEventListener --- ascV : ' + ascV);
        compareV = compare(arrayC, ascV);
        console.log('th.addEventListener --- compareV : ' + compareV);
        triC = Array.from(trxb).sort(compareV);
        triC.forEach(function (tr){
            console.log('th.addEventListener --- triC ; tr' + Array.from(trxb).indexOf(tr)  + ' : ' + tr.textContent);
        })
        // Array.from(thx).indexOf(th) récupère l'id de la colonne à trier
        // Compare applique les fonctions tdValue et tri à chaque "th"
        // La fonction sort() => Dans la fonction compare, le retour est égale à -1, 0 ou 1 et la fonction sort() se sert de
        // ce retour pour agencer ces 2 valeurs selon le second paramètre, "true" pour croissant et "false" pour décroissant
        // ex [4, 2, 5, 1, 3].sort((a, b) => a - b); https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        let classe = Array.from(trxb).sort(compare(Array.from(thx).indexOf(th), this.asc = !this.asc));
        // Reconstruit l'ordre de la colonne
        classe.forEach(function (tr) {
            tbody.appendChild(tr);
        });
    })
});