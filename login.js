document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnEntrar');
  const usuario = document.getElementById('usuario');
  const clave = document.getElementById('clave');
  const msg = document.getElementById('msg');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const u = (usuario.value || '').trim().toLowerCase();
    const c = (clave.value || '').trim();

    if (u === 'coordinador' && c === 'lempira2025') {
      msg.textContent = 'Acceso concedido';
      window.location.href = 'dashboard.html';
    } else {
      msg.textContent = 'Usuario o contraseña incorrectos';
    }
  });
});
