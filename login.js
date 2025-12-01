function login() {
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  if (usuario === "admin" && clave === "libre2025") {
    window.location.href = "dashboard.html";
  } else {
    alert("Credenciales incorrectas");
  }
}