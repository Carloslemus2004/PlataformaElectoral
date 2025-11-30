console.log("Script cargado correctamente");
const credenciales = [
  { user: 'coordinador', pass: 'lempira2025' },
  { user: 'auditor', pass: 'transparencia' }
];

function validar(usuario, clave) {
  const user = credenciales.find(u => u.user === usuario);
  return user && user.pass === clave;
}

function mostrar(mensaje, tipo = 'info') {
  const msg = document.getElementById('msg');
  msg.textContent = mensaje;
  msg.style.color = tipo === 'ok' ? '#2255ce' : 'red';
}

function init() {
  const btn = document.getElementById('btnEntrar');
  btn.addEventListener('click', () => {
    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;

    if (!usuario || !clave) {
      mostrar('Ingresa usuario y contraseña.');
      return;
    }

    if (validar(usuario, clave)) {
      mostrar('Acceso concedido. Cargando panel...', 'ok');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    } else {
      mostrar('Credenciales incorrectas.');
    }
  });
}

window.onload = init;
