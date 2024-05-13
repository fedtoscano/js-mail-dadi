//Gioco dei dadi
//Il giocatore gioca contro il computer.
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

const userNum = Math.floor((Math.random()*6)+1);
const pcNum = Math.floor((Math.random()*6)+1);

if(userNum===pcNum){
    console.log(`Pari! Hai giocato ${userNum}. Il pc ha giocato ${pcNum}`)
}
else if(userNum>pcNum){
    console.log(`Hai vinto! Hai giocato ${userNum}. Il pc ha giocato ${pcNum}`)
}else{
    console.log(`Hai perso! Hai giocato ${userNum}. Il pc ha giocato ${pcNum}`)
}
