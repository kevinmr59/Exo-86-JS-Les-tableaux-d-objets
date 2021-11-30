/* Ne touchez pas à ce code */
let citroen = {
    color: 'blue',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Citroën est ouverte");
    },
}

let peugeot = {
    color: 'yellow',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Peugeot est ouverte");
    }
}

let ford = {
    color: 'red',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Ford est ouverte");
    }
}


/**
 * Votre code commence ici !
 */
let voitures = {
    garage: 'concession',
    lieu: 'Fourmies',
    // Dans un tableau, ajouter les différentes voitures que vous possédez.
    collection: [citroen, peugeot, ford], // Vos voitures dans cette propriété !
}
for (let i = 0; i < voitures.collection.length; i++) {
    let para = document.getElementById('para');
    let span = document.createElement('span')
    span.innerHTML = voitures.collection[i].color + " , " ;
    span.style.color = voitures.collection[i].color;
    para.appendChild(span);
    voitures.collection[i].ouvrirPorte();}

// FIXME Parcourrez le tableau dans lequel vous avez placé vos objets.
// TODO ==> invoquez la méthode ouvrirPorte pour chaque voiture de la collection.


