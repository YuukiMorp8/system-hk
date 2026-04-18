let nomeinput = document.getElementById("nome");
let emailinput = document.getElementById("email");
let senhainput = document.getElementById("senha");
let criarconta = document.getElementById("btnCriarConta");

criarconta.addEventListener("click", function() {
    let nome = nomeinput.value;
    let email = emailinput.value; 
    let senha = senhainput.value; 
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
});
