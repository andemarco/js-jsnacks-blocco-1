var numeroUtente = parseInt(prompt('Indica un numero'));

for (var i = 1; i <= numeroUtente; i++) {
  document.getElementById('num').innerHTML += Math.pow(i, 3) + ' ';
  console.log(Math.pow(i, 3));
}
