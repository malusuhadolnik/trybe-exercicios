 function validaLogin() {    //https://www.formget.com/javascript-login-form/
    let botaoEntrar = document.querySelector(".botao-entrar");
        
    botaoEntrar.addEventListener("click", function(){
      let user = document.getElementById("user").value;
      let senha = document.getElementById("senha").value;
         
      if (user == "tryber@teste.com" && senha == "123456"){
            alert("Olá, Tryber!");
      } else {
            alert("Email ou senha inválidos");
      }
    });
 }

 validaLogin();

