const carros = require("../../bancoDedados");

const listarCarros = (req, res) => {
  const { cor, marca } = req.query;
  if (cor) {
    const carrosFiltrados = carros.filter((carro) => carro.cor === cor);
    return res.send(carrosFiltrados);
  }
  if (marca) {
    const carrosFiltrados = carros.filter((carro) => carro.marca === marca);
    return res.send(carrosFiltrados);
  }
  res.send(carros);
};

const listarCarro = (req, res) => {
  const { id } = req.params;
  const carro = carros.find((carro) => carro.id === Number(id));
  if (!carro) {
    return res.status(404).send({ message: "Carro não encontrado" });
  }
  res.send(carro);
};

module.exports = {
  listarCarros,
  listarCarro,
};
