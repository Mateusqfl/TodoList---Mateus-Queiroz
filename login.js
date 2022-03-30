const botaologin = document.querySelector("#botaoentrar"); 
const usuario = "admin"
const senha = "1234"
const login = document.querySelector("#login");
const passoword = document.querySelector("#password");


botaologin.addEventListener("click", function entrar(evento){
    evento.preventDefault();
    entrando()

})
    
function entrando(){

    if(login.value === usuario && passoword.value === senha){
        sessionStorage.setItem("logado",JSON.stringify(true));
        window.location = "index.html";

    } else{
        sessionStorage.setItem("logado", JSON.stringify(false));
        alert("Usuário ou Senha Inválidos");
    }
}