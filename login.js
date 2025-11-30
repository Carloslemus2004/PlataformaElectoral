const credenciales = [
  { user: 'coordinador', pass: 'lempira2025' },
  { user: 'auditor', pass: 'transparencia' }
];

function validar(usuario, clave) {
  return credenciales.some(c => c.user === usuario && c.pass === clave);
}

function mostrar(mensaje, tipo = 'info') {
  const msg = document.getElementById('msg');
  msg.textContent = mensaje;
  msg.style.color = tipo === 'ok' ? '#22c55e' : (tipo === 'error' ? '#ef4444' : '#94a3b8');
}

function init() {
  const btn = document.getElementById('btnEntrar');
  btn.addEventListener('click', () => {
    const usuario = document.getElementById('usuario').value.trim();
    const clave = document.getElementById('clave').value.trim();

    if (!usuario || !clave) {
      mostrar('Ingresa usuario y contraseña.', 'error');
      return;
    }
    if (validar(usuario, clave)) {
      mostrar('Acceso concedido. Cargando panel…', 'ok');
      // Aquí luego redirigimos al dashboard:
      // window.location.href = 'dashboard.html';
    } else {
      mostrar('Credenciales inválidas.', 'error');
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
