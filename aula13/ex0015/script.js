var agora = new Date();
var hora = agora.getHours();
var minuto = agora.getMinutes();
var background = document.querySelector('body')

mensagem = document.querySelector(".msg");
foto = document.querySelector(".foto");
mensagem.innerHTML = `Agora são extamente ${hora}h${minuto}min`; 

// if (hora < 5) {
//   foto.innerHTML() = 'teste'
// }

if (hora < 5) {
  foto.innerHTML = '<img src="img/madrugada.jpg" alt="madrugada">'
}
else if(hora < 12) {
  foto.innerHTML = '<img src="img/manha.jpg" alt="manha">'
}
else if (hora < 19) {
  foto.innerHTML = '<img src="img/tarde.jpg" alt="tarde">'
  background.style.backgroundColor() = "#A6D2F7"
}
else if (hora < 24  ) {
  foto.innerHTML = '<img src="img/noite.jpg" alt="noite">'
}
