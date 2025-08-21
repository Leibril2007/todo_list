export function tarea(indice, titulo, estado, fechaAs, fechaEnt, listaIntegrantes){
    let div = document.createElement('div');
    div.className = "tarea"; 

    // número
    let divNumero = document.createElement('div');
    divNumero.className = "div-numero";
    divNumero.textContent = indice;
    div.appendChild(divNumero);

    // título de la tarea > h3
    let h3Titulo = document.createElement('h3');
    h3Titulo.className = "titulo-tarea";
    h3Titulo.textContent = titulo;
    div.appendChild(h3Titulo);

    // estado tarea > div
    let divEstado = document.createElement('div');
    divEstado.className = "estado-tarea";
    divEstado.textContent = estado;

    // Aplicar clase por estado
    if (estado === "completada") {
        divEstado.classList.add("estado-completado");
    } else if (estado === "pendiente") {
        divEstado.classList.add("estado-pendiente");
    } else if (estado === "en progreso") {
        divEstado.classList.add("estado-progreso");
    }

    div.appendChild(divEstado);

    // fecha de asignación > span
    let spanFechaAsig = document.createElement('span');
    spanFechaAsig.className = "fecha-asignacion";
    spanFechaAsig.textContent = fechaAs;
    div.appendChild(spanFechaAsig);

    // fecha de entrega > span
    let spanFechaEnt = document.createElement('span');
    spanFechaEnt.className = "fecha-entrega";
    spanFechaEnt.textContent = fechaEnt;
    div.appendChild(spanFechaEnt);

    // listado de integrantes > div 
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "integrantes-tarea";

    listaIntegrantes.forEach(integrante => {
        let emoji = document.createElement('span');
        emoji.className = "emoji-integrante";
        emoji.textContent = integrante;
        divIntegrantes.appendChild(emoji);
    });

    div.appendChild(divIntegrantes);

    // botón de eliminar tarea > div > emoji
    let divEliminar = document.createElement('div');
    divEliminar.className = "eliminar-tarea";
    divEliminar.textContent = "🗑️"; 
    div.appendChild(divEliminar);

    return div;
}