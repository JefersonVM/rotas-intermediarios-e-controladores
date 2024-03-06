const express = require("express");
const { listarCarros, listarCarro } = require("./controllers/carros");

const app = express();

app.get("/carros", listarCarros);

app.get("/carros/:id", listarCarro);

app.listen(3000);
