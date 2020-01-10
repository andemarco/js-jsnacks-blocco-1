var numeroUno = parseInt(prompt('Inserisci qui il tuo primo numero'));
var numeroDue = parseInt(prompt('Inserisci qui il tuo secondo numero'));

if (numeroUno > numeroDue) {
  console.log(numeroUno);
<<<<<<< HEAD
  var winner = numeroUno
} else if (numeroUno < numeroDue) {
  console.log(numeroDue);
  var winner = numeroDue
} else {
  console.log('uguali');
}

document.getElementById('winner').innerHTML = 'Il numero più grande inserito è ' + winner
=======
} else if (numeroUno < numeroDue) {
  console.log(numeroDue);
} else {
  console.log('uguali');
}
>>>>>>> master
