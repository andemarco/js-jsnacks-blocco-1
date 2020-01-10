var invitati = ['Gino', 'Mimmo', 'Andrea', 'Giovanni', 'Alfredo'];
console.log(invitati);

var nomeUtente = prompt('Inserisci il tuo cognome');
console.log(nomeUtente);

var invitato = false;

for (var i = 0; i < invitati.length; i++) {
  if (nomeUtente == invitati[i]){
    invitato = true;
  }
}
if (invitato == true) {
  alert('puoi entrare')
} else {
  alert('non puoi entrare')
}
