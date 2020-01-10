var numeriTot = 0;
//
// for (var i = 0; i < 5; i++) {
//   var numeroInserito = parseInt(prompt('Inserisci il tuo  numero'))
//   numeriTot = numeriTot + numeroInserito
// }
// console.log(numeriTot);

var i = 0;
while (i < 5) {
  var numeroInserito = parseInt(prompt('Inserisci il tuo  numero'));
  numeriTot = numeriTot + numeroInserito;
  i++
}
console.log(numeriTot);
