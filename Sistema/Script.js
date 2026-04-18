// Script.js

let nomeinput = document.getElementById("usuario");
let senhainput = document.getElementById("senha");
let loginButton = document.getElementById("btnLogin");

loginButton.addEventListener("click", function() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

fetch("/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ usuario: usuario, senha: senha })
})

.then(response => response.json())
.then(data => {
    data.success ? window.location.href = "/Dashboard.html" : document.getElementById("errorMessage").textContent = data.message;
    console.log("Resposta do servidor:", data);
})
.catch(error => {
    data.success = false;
    data.message = "Erro ao fazer login";
    document.getElementById("errorMessage").textContent = data.message;

    console.error("Erro ao fazer login:", error);

});
});
