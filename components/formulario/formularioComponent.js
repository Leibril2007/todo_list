export function formulario() {

    let form = document.createElement('form');
    form.className = "form";

    let tituloGen = document.createElement('h1');
    tituloGen.className = "titulo-gen";
    tituloGen.textContent = "Agregar Tarea";
    form.appendChild(tituloGen);

    // Titulo Nombre > h3
    let tituloNombre = document.createElement('h3');
    tituloNombre.textContent = "Nombre";
    form.appendChild(tituloNombre);

    // campo Nombre > input
    let inputNombre = document.createElement('input');
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre de la tarea";
    form.appendChild(inputNombre);

    // Estado > h3
    let tituloEstado = document.createElement('h3');
    tituloEstado.textContent = "Estado";
    form.appendChild(tituloEstado);

    // campo Estado > select
    let selectEstado = document.createElement('select');

    let opcion1 = document.createElement('option');
    opcion1.value = "completado";
    opcion1.textContent = "Completado";

    let opcion2 = document.createElement('option');
    opcion2.value = "en_proceso";
    opcion2.textContent = "En proceso";

    let opcion3 = document.createElement('option');
    opcion3.value = "pendiente";
    opcion3.textContent = "Pendiente";

    selectEstado.appendChild(opcion1);
    selectEstado.appendChild(opcion2);
    selectEstado.appendChild(opcion3);

    form.appendChild(selectEstado);

    // Fecha de inicio > h3
    let tituloFechaInicio = document.createElement('h3');
    tituloFechaInicio.textContent = "Fecha de inicio";
    form.appendChild(tituloFechaInicio);

    // Fecha inicio automática
    const hoy = new Date();
    let fechaInicio = document.createElement('p');
    fechaInicio.className = "fecha-inicio"; // nueva clase para estilizar
    fechaInicio.textContent = hoy.toLocaleDateString();
    form.appendChild(fechaInicio);

    // Fecha de asignación > h3
    let tituloFechaAsignacion = document.createElement('h3');
    tituloFechaAsignacion.textContent = "Fecha de asignación";
    form.appendChild(tituloFechaAsignacion);

    // Fecha de asignación en calendario > input
    let inputFechaAsignacion = document.createElement('input');
    inputFechaAsignacion.type = "date";
    form.appendChild(inputFechaAsignacion);

    // Descripción > h3
    let tituloDescripcion = document.createElement('h3');
    tituloDescripcion.textContent = "Descripción";
    form.appendChild(tituloDescripcion);

    // campo Descripción > textarea
    let textareaDescripcion = document.createElement('textarea');
    textareaDescripcion.placeholder = "Descripción de la tarea...";
    textareaDescripcion.rows = 4;
    textareaDescripcion.style.resize = "vertical";
    form.appendChild(textareaDescripcion);

    // Botón de cerrar el formulario (ahora captura datos también)
    let botonCerrar = document.createElement('button');
    botonCerrar.textContent = "Cerrar";
    botonCerrar.type = "button";
    botonCerrar.className = "cerrar-btn";
    botonCerrar.onclick = () => {
        // Capturar valores
        const datosFormulario = {
            nombre: inputNombre.value,
            estado: selectEstado.value,
            fechaInicio: hoy.toLocaleDateString(),
            fechaAsignacion: inputFechaAsignacion.value,
            descripcion: textareaDescripcion.value
        };

        console.log("Datos del formulario:", datosFormulario);

        // Cerrar el modal
        document.body.removeChild(fondoModal);
    };
    form.appendChild(botonCerrar);

    // Envoltorio para hacerlo modal
    let fondoModal = document.createElement('div');
    fondoModal.className = "fondo-modal";
    fondoModal.appendChild(form);

    return fondoModal;
}
