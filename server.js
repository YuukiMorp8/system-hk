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

fetch("/Login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ usuario: usuario, senha: senha })
})
.then(response => response.json())
.then(data => {
    console.log("Resposta do servidor:", data);
})
.catch(error => {
    console.error("Erro ao fazer login:", error);
});

app.post("/criar-conta", (req, res) => {
    const { nome, email, senha } = req.body;
    console.log("Dados recebidos:", { nome, email, senha });
    if (!db) {
        return res.status(500).json({ error: "Banco de dados não conectado" });
    }
    // Lógica para criar a conta no banco de dados
});

app.get("/", (req, res) => {
 res.sendFile(__dirname + "/Servidor/Login.html");
});

app.listen(3000, () => {
 console.log("Servidor rodando");
});

