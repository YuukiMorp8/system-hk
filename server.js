// server.js

let db;

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

app.use(express.json());
app.use(express.static("Sistema"));
app.use(express.static("Servidor"));

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

app.post("/login", async (req, res) => {
    const { usuario, senha } = req.body;

    if (!db) {
        return res.status(500).json({
            success: false,
            message: "Banco não conectado"
        });
    }

    try {
        const user = await db.collection("Dbgenerico").findOne({ usuario: usuario });

        if (!user) {
            return res.json({
                success: false,
                message: "Usuário não encontrado"
            });
        }

        if (user.senha !== senha) {
            return res.json({
                success: false,
                message: "Senha incorreta"
            });
        }

        return res.json({
            success: true
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Erro no servidor"
        });
    }
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
    res.sendFile("/Dashboard.html");
});

app.get("/", (req, res) => {
    res.redirect("/Login.html");
});

app.listen(3000, () => {
 console.log("Servidor rodando");
});

