document.getElementById("button").addEventListener("click", validarCorreo);
let inputMail; 
var inputPassword;
let password = "hola";
let mail = "jtorres1@ucol.mx";
function validarCorreo() {
  inputMail= document.getElementById("inputMail").value;
  inputPassword= document.getElementById("inputPassword").value;
    if(  inputMail != mail || inputPassword != password){

    alert("Los datos que ingresaste no son correctos")
  }

}
