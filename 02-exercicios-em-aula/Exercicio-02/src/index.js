const express = require("express");
const { listarCarros, listarCarro } = require("./controllers/carros");
const validarSenha = require("./intermediarios");

const app = express();

app.use(express.json());

app.use(validarSenha);

app.get("/carros", listarCarros);

app.get("/carros/:id", listarCarro);

app.listen(3000);
