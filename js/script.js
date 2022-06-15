// indico un livello di difficoltà

    // prima di tutto chiedo all'utente quale difficoltà vorrà applicare al gioco
let difficulty = prompt('Scegli la difficoltà tra 1 - 2 - 3');

// Elenco di numeri e array di numeri
let nNumbers = 0;
// array dove andranno le bombe generate casualmente
let nades = [];

// applico un validatore
while (difficulty < 1 || difficulty > 3) {
    difficulty = prompt('Scegli la difficoltà tra 1 - 2 - 3');
}

// difficoltà
if (difficulty === '1') {
    nNumbers = 100;
} else if (difficulty === '2') {
    nNumbers = 81;
} else if (difficulty === '3') {
    nNumbers = 49;
}

// genero i numeri nell'array (funzione)
nades = nadesGenerator(nNumbers, nades);

console.log(nades);

// numero tentativi possibili
let numTry = nNumbers - 16; 

console.log(numTry)

let userArray = [];

let gameOver = true;

// chiedo all'utente vari numeri 
// ciclo fino a quando ho trovato tutti i tentativi oppure fino a quando non trovo un numero in nades
while (gameOver === true) {
    let userNumber = parseInt(prompt('dimmi un numero'));
    // se è incluso tra le bombe hai perso
    if (nades.includes(userNumber)) {
        gameOver = false;
        alert(`hai perso, il tuo punteggio è ${userArray.length}`);
        // e se non è inserito tra le bombe lo inserisco nell'array del giocatore, sempre se non è già stato inserito
    } else if (!nades.includes(userNumber) && !userArray.includes(userNumber)) {
        
        userArray.push(userNumber);
        // e se ho raggiunto il numero massimo di tentativi ha vinto
        if (userArray.length === numTry) {
            gameOver = false;
            alert('Hai vinto!');
        }
    }
}
console.log(userArray)

// imposto le bombe generate casualmente in base alla difficoltà
function nadesGenerator(number, Array) {
    while (Array.length !== 16) {
        let randomNum = Math.floor(Math.random() * number) + 1;
        if (!Array.includes(randomNum)) {
        Array.push(randomNum);
       }
    }
    return Array;
}
