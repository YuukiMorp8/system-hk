// Script.js

let nomeinput = document.getElementById("usuario");
let senhainput = document.getElementById("senha");
let loginbutton = document.getElementById("btnLogin");

loginbutton.addEventListener("click", function() {
    let usuario = nomeinput.value;
    let senha = senhainput.value;
fetch("/login", {
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
});
