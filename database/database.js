import mongoose from "mongoose";
import dotenv from "dotenv/config.js";

class Database {
  constructor() {
    this.conectDb();
  }

  conectDb() {
    (async () => {
      try {
        await mongoose.connect(process.env.DB_MONGO, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Conectado ao MongoDB. \n");
      } catch (error) {
        console.log("Erro ao conectar com o MONGODB " + error);
      }
    })();
  }
}

export default new Database();
