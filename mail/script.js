//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

const mailList=["stockfish56@gmail.com", "lezgoo45@yahoo.com", "commodore64@yahoo.com", "nonhoidee@mondomail.ops"]

const userMail = prompt("Inserisci la tua mail")

if(mailList.includes(userMail)){
    console.log("Puoi effettuare il login")
}else{
    console.log("Forse hai sbagliato indirizzo...")
}