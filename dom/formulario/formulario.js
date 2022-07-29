const tipoDoumento = ['cedula', 'tarjeta identidad', 'pasaporte', 'cedula extranjera']

function insertarSelect() {
    let content = '<option value="">Seleccione opcion</option>'
    for (const item of tipoDoumento) {
        content += `<option value="${item}">${item}</option>`
    }
    document.getElementById('select').innerHTML = content
}