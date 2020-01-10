var parolaUno = prompt('Inserisci qui la tua prima parola');
var parolaDue = prompt('Inserisci qui la tua seconda parola');

if (parolaUno.length > parolaDue.length) {
  console.log(parolaUno);
  console.log(parolaDue);
} else if (parolaUno.length < parolaDue.length) {
  console.log(parolaDue);
  console.log(parolaUno);
} else {
  console.log('uguali');
}
