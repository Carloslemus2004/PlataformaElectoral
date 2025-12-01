fetch('candidatos.json')
  .then(res => res.json())
  .then(candidatos => {
    const tabla = document.getElementById('tabla');
    const encabezado = tabla.querySelector('thead tr');
    encabezado.innerHTML = '<th>Mesa</th>';

    candidatos.forEach(c => {
      encabezado.innerHTML += `
        <th>
          <img src="${c.img}" alt="${c.name}" width="32"><br>
          ${c.name}<br><small>${c.partido}</small>
        </th>
      `;
    });

    const cuerpo = tabla.querySelector('tbody');
    cuerpo.innerHTML = '';
    ['Mesa 1', 'Mesa 2'].forEach(mesa => {
      let fila = `<tr><td>${mesa}</td>`;
      candidatos.forEach(() => {
        fila += `<td><input type="number" min="0" value="0"></td>`;
      });
      fila += '</tr>';
      cuerpo.innerHTML += fila;
    });
  });
