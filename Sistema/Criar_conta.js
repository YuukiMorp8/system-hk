// Criar_conta.js

let nomeinput = document.getElementById("novoUsuario");
let emailinput = document.getElementById("novoEmail");
let senhainput = document.getElementById("novaSenha");
let criarconta = document.getElementById("btnCriarConta");

criarconta.addEventListener("click", function() {
    let nome = nomeinput.value;
    let email = emailinput.value; 
    let senha = senhainput.value; 
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
});
