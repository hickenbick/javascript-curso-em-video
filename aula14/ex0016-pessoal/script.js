function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var inputAno = document.querySelector(".inputano");
  console.log(inputAno);
  var resultado = document.querySelector(".resultado");

  if (inputAno.value.length == 0 || inputAno.value > ano) {
    window.alert("Preencha o ano do seu nascimento corretamente");
  } else {
    var idade = ano - Number(inputAno.value);
    var sexo = document.getElementsByName("radialsexo");
    genero = "";
    var foto = document.querySelector(".foto");
    if (sexo[0].checked) {
      if (idade < 12) {
        genero = "uma criança";
        foto.innerHTML =
          '<img src="./img/foto-bebe-m.png" alt="criança masculino">';
      } else if (idade < 18) {
        genero = "um jovem";
        foto.innerHTML =
          '<img src="./img/foto-jovem-m.png" alt="jovem masculino">';
      } else if (idade < 60) {
        foto.innerHTML =
          '<img src="./img/foto-adulto-m.png" alt="adulto masculino">';
        genero = "um homem";
      } else if (idade >= 60) {
        foto.innerHTML =
          '<img src="./img/foto-idoso-m.png" alt="idoso masculino">';
        genero = "um idoso";
      }
    } else if (sexo[1].checked) {
      genero = "uma mulher";
      resultado.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`;
      if (idade < 12) {
        genero = "uma criança";
        foto.innerHTML =
        '<img src="./img/foto-bebe-f.png" alt="criança feminino">';
      } else if (idade < 18) {
        genero = "uma jovem";
        foto.innerHTML =
        '<img src="./img/foto-jovem-f.png" alt="adulto feminino">';
      } else if (idade < 60) {
        genero = "uma mulher";
        foto.innerHTML =
        '<img src="./img/foto-adulto-f.png" alt="adulto feminino">';
      } else if (idade >= 60) {
        genero = "uma idosa";
        foto.innerHTML =
        '<img src="./img/foto-idoso-f.png" alt="adulto feminino">';
      }
    }
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`;
  }
}
