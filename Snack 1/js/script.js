var numeroUno = parseInt(prompt('Inserisci qui il tuo primo numero'));
var numeroDue = parseInt(prompt('Inserisci qui il tuo secondo numero'));

if (numeroUno > numeroDue) {
  console.log(numeroUno);
} else if (numeroUno < numeroDue) {
  console.log(numeroDue);
} else {
  console.log('uguali');
}
