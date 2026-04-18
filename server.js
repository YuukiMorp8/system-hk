const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

async function connectToDatabase() {
    const client = new MongoClient(process.env.DB_URL);
    await client.connect();
    return client;
}
connectToDatabase().then(client => {
    console.log("Conectado ao MongoDB");
    const db = client.db("BancOAfW");
    const usersCollection = db.collection("users");
    app.post("/login", express.json(), async (req, res) => {
        const { username, password } = req.body;
        const user = await usersCollection.findOne({ username,
            password });
        if (user) {
            res.json({ success: true, message: "Login bem-sucedido" });
        }
        else {
            res.json({ success: false, message: "Credenciais inválidas" });
        }
    });
}).catch(err => {
    console.error("Erro ao conectar ao MongoDB:", err);
});

app.get("/", (req, res) => {
 res.sendFile(__dirname + "/Sistema/Login.html");
});

app.listen(3000, () => {
 console.log("Servidor rodando");
});

