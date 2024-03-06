const validarSenha = (req, res, next) => {
  const { senha } = req.query;

  if (senha === "123") {
    next();
  } else if (!senha) {
    res.send("Senha não informada");
  } else {
    res.send("Acesso negado");
  }
};

module.exports = validarSenha;
