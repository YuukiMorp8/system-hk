require("dotenv").config();

const express = require("express");
const app = express();

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;

console.log("USER:", user);
console.log("PASS:", password);

// rota básica
app.get("/", (req, res) => {
    res.send("Servidor online 🚀");
});

// importante: usar porta do Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
