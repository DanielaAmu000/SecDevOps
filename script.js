function validateLogin(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username == "admin" && password == "SecDevOps_PC$$") {
      document.getElementById("message").innerHTML = "Acceso autorizado";
    } else{
      document.getElementById("message").innerHTML = "Usuario  o contraseña incorrectos";
    }
}