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
    console.log("Resposta do servidor:", data);

    if (data.success) {
        window.location.href = "/Dashboard.html";
    } else {
        let errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = data.message;
        errorMessage.classList.add("show"); // 👈 isso faltava
    }
})
.catch(error => {
    console.error("Erro ao fazer login:", error);
});
});
