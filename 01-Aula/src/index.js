const express = require("express");

const {
  filtrarProfessores,
  filtrarProfessor,
} = require("./controllers/professores");

const app = express();

const primeiroIntermediario = (req, res, next) => {
  console.log("Passei no primeiro intermediário");
  next();
};

const segundoIntermediario = (req, res, next) => {
  console.log("Passei no segundo intermediário");
  next();
};

const intermediarioDaRota = (req, res, next) => {
  console.log("Passei no intermediário da rota");
  next();
};

app.use(primeiroIntermediario, segundoIntermediario);

app.get("/professores", intermediarioDaRota, filtrarProfessores);

app.get("/professores/:id", filtrarProfessor);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
