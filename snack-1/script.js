'use strict';

//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const biciInGara = [
    {
        nome: 'Wilier 0 SLR',
        peso: '6,5'
    },

    {
        nome: 'Trek Emonda SLR',
        peso: '4,65'
    },

    {
        nome: 'Orbea Orca M10iLTD Replica',
        peso: '6,7'
    },

    {
        nome: 'Canyon Ultimate CF SL 8 Aero',
        peso: '7,86' 
    },

]

// Confronto peso per trovare il minore

let pesoMinore = biciInGara[0].peso;

for (let i = 1; i < biciInGara.length; i++) {

    if (biciInGara[i].peso < pesoMinore) {

        pesoMinore = biciInGara[i].peso;
    }

}

console.log(pesoMinore + ' ' + 'kg');


// Individuare bici con peso minore

let biciPiùLeggera

for (let bici of biciInGara) {

    if (bici.peso === pesoMinore) {
        biciPiùLeggera = bici;
    }

}

console.log (biciPiùLeggera);
