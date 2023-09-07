/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
    let result = l1 * l2;
    return result;
  }
  
  console.log("L'area del rettangolo è:", area(6, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(x,y){
    if (x === y){
        return (x + y)* 3
    } else {
        return x + y;
    }
}

console.log(crazySum(2, 2)); 
console.log(crazySum(3, 5));



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un 
 numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero
  fornito sia maggiore di 19.
*/
function crazyDiff(a) {
    const differenzaAssoluta = Math.abs(a - 19); 
    
    if (a > 19) {
      return differenzaAssoluta * 3;
    } else {
      return differenzaAssoluta;
    }
  }
  console.log(crazyDiff(25)); 
  console.log(crazyDiff(18)); 



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary (n){
    if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
        return false
    }
}
console.log(boundary(21))
console.log(boundary(400))
console.log(boundary(1))


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify (p){
    if(p.startsWith("EPICODE"))
    {return p;}
    else {
        return "EPICODE" + p;
    }
}
  console.log(epify(" Hello, world!"));
  console.log(epify("EPICODE school"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(j) {
    if (j <= 0) {
      return false; 
    }
    
    else if (j % 3 === 0 || j % 7 === 0) {
      return true; 
    } else {
      return false; 
    }
  }
  console.log(check3and7(14))
  console.log(check3and7(6))
  console.log(check3and7(5))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una 
 stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(d) {
    let reversedString = '';
    for (let i = d.length - 1; i >= 0; i--) {
      reversedString += d.charAt(i);
    }
    return reversedString;
  }
  const stringaOriginale = "EPICODE";
  const stringaInvertita = reverseString(stringaOriginale);
  console.log("Stringa originale: " + stringaOriginale);
console.log("Stringa invertita: " + stringaInvertita);


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
