var agora = new Date();
var hora = agora.getHours();
var minuto = agora.getMinutes();

mensagem = document.querySelector(".msg");
foto = document.querySelector(".foto");
mensagem.innerHTML = `Agora são extamente <strong>${hora}h${minuto}min</strong>`; 

// if (hora < 5) {
//   foto.innerHTML() = 'teste'
// }

if (hora < 5) {
  foto.innerHTML = '<img src="img/madrugada.jpg" alt="madrugada">'
  document.querySelector('body')
  document.body.style.background = '#01183A'

}
else if(hora < 12) {
  foto.innerHTML = '<img src="img/manha.jpg" alt="manha">'
  document.body.style.background = '#FFC77C'
  
}
else if (hora < 19) {
  foto.innerHTML = '<img src="img/tarde.jpg" alt="tarde">'
  document.body.style.background = '#79B0E6'
}
else if (hora < 24  ) {
  foto.innerHTML = '<img src="img/noite.jpg" alt="noite">'
  document.body.style.background = '#004B84'
}
