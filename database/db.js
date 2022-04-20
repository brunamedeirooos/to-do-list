const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.udwof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

      {
        //evitar erro com o mongodb
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    ) //saber se obtive sucesso na minha conexão com o mongodb
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
