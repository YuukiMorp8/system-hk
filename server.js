const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

function connectToDatabase() {
    const url = process.env.DB_URL;
    return MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
}
connectToDatabase()
    .then(client => {
        console.log("Conectado ao MongoDB");
        const db = client.db("BancOAfW");
        // Você pode usar a variável `db` para interagir com o banco de dados
    })
    .catch(error => {
        console.error("Erro ao conectar ao MongoDB:", error);
    });

app.get("/", (req, res) => {
 res.sendFile(__dirname + "/Servidor/Login.html");
});

app.listen(3000, () => {
 console.log("Servidor rodando");
});

