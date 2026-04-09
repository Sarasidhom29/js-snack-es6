'use strict';

//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreInGara = [
    {
        nome: 'Juventus',
        puntiSegnati: 0,
        falliSubiti: 0 
    },

    {
        nome: 'Milan',
        puntiSegnati: 0,
        falliSubiti: 0 
    },

    {
        nome: 'Inter',
        puntiSegnati: 0,
        falliSubiti: 0 
    }
]

//generatore numeri casuali
function generatoreNum(max) {
    return Math.floor(Math.random() * max);
}

//assegnazione numeri casuali

for (let squadra of squadreInGara) {
    squadra.puntiSegnati = generatoreNum (20);
    squadra.falliSubiti = generatoreNum (10);
}


//nuovo array con solo nome e falli
const squadreFalli = [];

for (let squadra of squadreInGara) {

    squadreFalli.push ({
        nome: squadra.nome,
        falliSubiti: squadra.falliSubiti
    });
}

console.log(squadreFalli);

