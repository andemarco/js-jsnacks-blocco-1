// var numeri = [];
// console.log(numeri);
//
// for (var i = 0; i <= 5; i++) {
//   var numeroInserito = parseInt(prompt('inserisci un numero'));
//   if (numeroInserito % 2 != 0) {
//     numeri.push(numeroInserito);
//   } else {
//     console.log('numero pari');
//   }
// }
// document.getElementById('numeri').innerHTML = numeri;

var numeri = [];
i = 0;
while (i <= 5) {
  var numeroInserito = parseInt(prompt('inserisci un numero'));
  if (numeroInserito % 2 != 0) {
      numeri.push(numeroInserito);
    } else {
      console.log('numero pari');
    }
    i++;
}
document.getElementById('numeri').innerHTML = numeri;
