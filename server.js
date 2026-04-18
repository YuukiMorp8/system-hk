// server.js

let db;

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;


function connectToDatabase() {
    const url = process.env.DB_URL;
    return MongoClient.connect(url);
}
connectToDatabase()
    .then(client => {
        console.log("Conectado ao MongoDB");
        db = client.db("BancOAfW");
        db.collection("Dbgenerico")
    })
    .catch(error => {
        console.error("Erro ao conectar ao MongoDB:", error);
    });

app.post("/criar-conta", (req, res) => {
    const { nome, email, senha } = req.body;
    console.log("Dados recebidos:", { nome, email, senha });
    if (!db) {
        return res.status(500).json({ error: "Banco de dados não conectado" });
    }
    db.collection("Dbgenerico").insertOne({ nome, email, senha })
        .then(result => {
            console.log("Conta criada com sucesso:", result);
            res.json({ message: "Conta criada com sucesso" });
        })
        .catch(error => {
            console.error("Erro ao criar conta:", error);
            res.status(500).json({ error: "Erro ao criar conta" });
        });
});

app.get("/", (req, res) => {
 res.sendFile(__dirname + "/Servidor/Login.html");
});

app.listen(3000, () => {
 console.log("Servidor rodando");
});


