document.addEventListener('DOMContentLoaded', function() {
  const itemInput = document.getElementById('item');
  const addButton = document.getElementById('agregar');
  const clearButton = document.getElementById('limpiar');
  const contenedor = document.getElementById('contenedor');

  // Función para obtener el listado desde localStorage
  function obtenerListado() {
    const listado = localStorage.getItem('listado');
    return listado ? JSON.parse(listado) : [];
  }

  // Función para guardar el listado en localStorage
  function guardarListado(listado) {
    localStorage.setItem('listado', JSON.stringify(listado));
  }

  // Función para actualizar la vista del listado
  function actualizarVista() {
    contenedor.innerHTML = '';  // Limpia la lista actual
    const listado = obtenerListado();
    listado.forEach((item, index) => {
      const itemElement = document.createElement('li');
      itemElement.textContent = item;
      itemElement.className = 'list-group-item';
      contenedor.appendChild(itemElement);
    });
  }

  // Agregar ítem al listado
  addButton.addEventListener('click', function() {
    const nuevoItem = itemInput.value.trim();
    if (nuevoItem) {
      const listado = obtenerListado();
      listado.push(nuevoItem);
      guardarListado(listado);
      actualizarVista();
      itemInput.value = '';  // Limpia el campo de entrada
    }
  });

  // Limpiar listado
  clearButton.addEventListener('click', function() {
    localStorage.removeItem('listado');
    actualizarVista();
  });

  // Inicializa la vista con el listado almacenado
  actualizarVista();
});

