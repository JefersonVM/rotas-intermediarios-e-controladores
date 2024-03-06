const professores = require("../bancoDeDados");

const filtrarProfessores = (req, res) => {
  let resultado = professores;
  const { nome, disciplina } = req.query;

  console.log('cheguei no controlador de listagem dos professores');

  if (nome || disciplina) {
    resultado = professores.filter((professor) => {
      if (nome && disciplina) {
        return (
          professor.nome.includes(nome) &&
          professor.disciplina.includes(disciplina)
        );
      } else if (nome) {
        return professor.nome.includes(nome);
      } else if (disciplina) {
        return professor.disciplina.includes(disciplina);
      }
    });
  }

  res.send(resultado);
};

const filtrarProfessor = (req, res) => {
    console.log('cheguei no controlador de detalhes do professor');
  const id = req.params.id;
  const professor = professores.find((professor) => professor.id == id);
  if (!professor) {
    res.status(404).send("Professor não encontrado");
  }
  res.send(professor);
};

module.exports = { filtrarProfessores, filtrarProfessor };
