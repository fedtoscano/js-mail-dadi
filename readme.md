Gioco dei dadi
Il giocatore gioca contro il computer.
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

        genero due numeri randomicamente assegnandoli a due variabili (una per il giocatore, una per il pc)
        confronto i due numeri
            se a è maggiore di b, stampo a
            altrimenti, stampo b


Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
        creo un array vuoto contenente delle mail
        chiedo all'utente di inserire la sua mail con un prompt
        con il metodo includes() verifico se la mail inserita dall'utente corrisponde
            se corrisponde, dico che l'utente può accedere
            altrimenti, dico che non può accedere

Saltare a piè dispari [Bonus]
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è pari inseriscilo nell’array
        creo un array vuoto
        con un ciclo for chiedo all'utente per 6 volte di inserire un numero
            se num%2===0 aggiungo il numero all'array con il metodo push()