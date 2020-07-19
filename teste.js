const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then((response) => {
  let funcionarios = response.data;

  let resultado = funcionarios
    .filter(mulheres)
    .filter(chinesas)
    .reduce(salario);

  console.log(`A ${resultado.nome} tem o menor salario resultando em ${resultado.salario} Reais`);
});

let mulheres = function (valor) {
  let genero = valor.genero == "F";
  return genero;
};

let chinesas = function (mulher) {
  let origem = mulher.pais == "China";
  return origem;
};

let salario = function (acc, atual) {
  
  let total = acc.salario <= atual.salario ?  acc : atual

return total}
 