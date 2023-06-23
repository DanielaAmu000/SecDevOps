function validateLogin(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username !== "admin") {
      document.getElementById("message").innerHTML = "Usuario incorrecto";
    } else if (password !== "contraseña") {
      document.getElementById("message").innerHTML = "Contraseña incorrecta";
    } else {
      document.getElementById("message").innerHTML = "Acceso autorizado";
    }
  }
  