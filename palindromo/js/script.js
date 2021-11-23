// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedere una parola
const userWord = prompt('Dimmi una parola.');
// verifico se la parola è palindroma o no
let wordIsPalindrome = palindromeWord(userWord);
// output
if(wordIsPalindrome) {
    alert('la parola è palindroma');
} else {
    alert('la parola non è palindroma');
}


// FUNCTIONS
// verifica se la parola è palindroma o no
// word -> parola originale
// return: boolean;
function palindromeWord(word) {
    let wordReverse = '';

    // inverto la parola 
    for( let i = word.length - 1; i >= 0; i-- ) {
       
        wordReverse += (word[i]);
    }

    console.log(wordReverse);
     // se la parola originale è === al contrario di essa, allora è palindroma altrimenti no
    let result;
     if( word === wordReverse ) {
        result = true;
    } else {
        result = false;
    }
    
    return result;
}