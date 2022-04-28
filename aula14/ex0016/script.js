function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.querySelector(".input");
  var resultado = document.querySelector(".resultado");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('verifique os dados e tente novamente')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('class', 'foto')
    if (fsex[0].checked) {
      genero = 'um homem'
      if (idade >= 0 && idade < 10) {
        //criança
      } else if (idade < 21){
        //jovem
      } else if (idade < 60) {
        //homem
      } else if (idade >= 60) {
        //idoso
      }
    } else if (fsex[1].checked) {
      genero = 'uma mulher'
    }
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
  }
}
