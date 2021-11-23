// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// chiedo all'utente se vuole pari o dispari
const userEvenOdd = prompt('Scegli pari o dispari');
// chiedo all'utente un numero da 1 a 5
const userNumber = prompt('Dimmi un numero da 1 a 5');

// genero un numero random
const randomNumberComputer = getRndInteger(1, 5);

// sommare i due numeri
const addition = userNumber + randomNumberComputer;

// stabilire se la somma è pari o dispari
const additionEvenOrOdd = NumberIsEvenOrOdd(addition)
// dichiarare il vincitore
if(userEvenOdd === additionEvenOrOdd) {
    alert('Hai vinto.');
} else {
    alert('Spiacente, ha vinto il computer.');
}

// FUNCTIONS
// numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// verifico se un numero è pari o dispari 
// return: stringa se è pari o dispari
function NumberIsEvenOrOdd(number) {
    let result;
    if( number % 2 === 0 ) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    return result;
}