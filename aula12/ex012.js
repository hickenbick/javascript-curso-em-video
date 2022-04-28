var idade = 68;
console.log(`você possui ${idade} anos de idade.`);

if (idade >= 18 && idade < 67) {
  console.log("Maior de idade, voto obrigatório.");
} else if (idade >= 16 || idade >= 67) {
  console.log("voto opcional.");
} else if (idade < 16) {
  console.log("Menor de idade sem direito a voto.");
}
