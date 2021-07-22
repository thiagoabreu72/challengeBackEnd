import express from "express";
import router from "./api/routes/router.js";
// As importações abaixo são necessárias para conectar ao banco
import db from "./database/database.js";
import dotenv from "dotenv/config.js";


const app = express();
app.use(express.json());
app.use("/", router);

//db.conectDb();
app.listen(3000, () => console.log("Funcionando."));
