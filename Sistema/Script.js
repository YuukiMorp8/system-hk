
let usuarioinput = document.getElementById("usuario");
let senhainput = document.getElementById("senha");
let loginbutton = document.getElementById("loginbutton");

loginbutton.addEventListener("click", function() {
    let usuario = usuarioinput.value;
    let senha = senhainput.value;  
    console.log("Usuário:", usuario);
    console.log("Senha:", senha);
});
