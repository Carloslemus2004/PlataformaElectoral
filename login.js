const credenciales = [
  { user: 'coordinador', pass: 'lempira2025' },
  { user: 'auditor', pass: 'transparencia' }
];

function validar(usuario, clave) {
  const u = credenciales.find(x => x.user === usuario);
  return !!(u && u.pass === clave);
}

function mostrar(mensaje, tipo = 'info') {
  const msg = document.getElementById('msg');
  if (!msg) return;
  msg.textContent = mensaje;
  msg.style.color = tipo === 'ok' ? '#1a7f37' : '#c62828';
}

function init() {
  const btn = document.getElementById('btnEntrar');
  if (!btn) {
    console.error('No se encontró el botón btnEntrar');
    return;
  }

  btn.addEventListener('click', () => {
    const usuario = document.getElementById('usuario')?.value?.trim();
    const clave = document.getElementById('clave')?.value;

    if (!usuario || !clave) {
      mostrar('Ingresa usuario y contraseña.');
      return;
    }

    if (validar(usuario, clave)) {
      mostrar('Acceso concedido. Cargando panel...', 'ok');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1200);
    } else {
      mostrar('Credenciales incorrectas.');
    }
  });
}

window.onload = init;
