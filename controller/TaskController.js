//criando uma variavel que vai receber uma arrow function - que vai receber a requisição e a resposta e vai renderizar o index

const getAll = (req, res) => {
  return res.render("index");
};

module.exports = {
  getAll,
};
