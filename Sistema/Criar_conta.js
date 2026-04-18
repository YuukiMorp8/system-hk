// Criar_conta.js

let nomeinput = document.getElementById("novoUsuario");
let emailinput = document.getElementById("novoEmail");
let senhainput = document.getElementById("novaSenha");
let criarconta = document.getElementById("btnCriarConta");

criarconta.addEventListener("click", function() {
    let nome = nomeinput.value;
    let email = emailinput.value; 
    let senha = senhainput.value; 
fetch("/criar-conta", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome: nome, email: email, senha: senha })
})
.then(response => response.json())
.then(data => {
    console.log("Resposta do servidor:", data);
})
.catch(error => {
    console.error("Erro ao criar conta:", error);
});
});
