const porta = 3003;

const express = require("express");
const app = express();

app.get('/produtos', (req, res, next) => {
  res.send({ nome: "Vanderley", idade: 24 });
});

app.listen(porta,()=> console.log(`O servidor está ativo na porta ${porta}`));