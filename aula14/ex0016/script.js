function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.querySelector(".input");
  var resultado = document.querySelector(".resultado");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("verifique os dados e tente novamente");
  } else {
    var idade = ano - Number(fano.value);
    var fsex = document.getElementsByName("radsex");
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("class", "foto");
    if (fsex[0].checked) {
      genero = "um homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "./img/foto-bebe-m.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "./img/foto-jovem-m.png");
      } else if (idade < 60) {
        //homem
        img.setAttribute("src", "./img/foto-adulto-m.png");
      } else if (idade >= 60) {
        //idoso
        img.setAttribute("src", "./img/foto-idoso-m.png");
      }
    } else if (fsex[1].checked) {
      genero = "uma mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "./img/foto-bebe-f.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "./img/foto-jovem-f.png");
      } else if (idade < 60) {
        //homem
        img.setAttribute("src", "./img/foto-adulto-f.png");
      } else if (idade >= 60) {
        //idoso
        img.setAttribute("src", "./img/foto-idoso-f.png");
      }
    }
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`;
    resultado.appendChild(img);
  }
}
