import { formulario } from "../formulario/formularioComponent.js";

export function informacion(tarea){
    console.log("tarea",tarea);
    
    // div base
    let div = document.createElement('div');
    div.className = "div-info";

    // 📦 div botones
    let divBotones = document.createElement('div');
    divBotones.className = "div-botones";

    // ➕ botón + tarea
    let btnTarea = document.createElement('div');
    btnTarea.className = "btn-tarea";
    btnTarea.textContent = "+ tarea";

    btnTarea.addEventListener("click", function(){

        document.body.appendChild(formulario());

    });

    divBotones.appendChild(btnTarea);



    // 📁 botón Archivados
    let btnArchivados = document.createElement('div');
    btnArchivados.className = "btn-archivados";
    btnArchivados.textContent = "Archivados";
    divBotones.appendChild(btnArchivados);

    div.appendChild(divBotones);

    // 📄 div información
    let divInformacion = document.createElement('div');
    divInformacion.className = "div-informacion";

    // ✅ div estado
    let divEstado = document.createElement('div');
    divEstado.className = "estado-info";
    divEstado.textContent = tarea.estado_tarea;

    // Agrega color según estado
    if (tarea.estado_tarea === "completada") {
        divEstado.classList.add("estado-completado");
    } else if (tarea.estado_tarea === "pendiente") {
        divEstado.classList.add("estado-pendiente");
    } else if (tarea.estado_tarea === "en progreso") {
        divEstado.classList.add("estado-progreso");
    }

    divInformacion.appendChild(divEstado);

    // 📝 h3 título
    let titulo = document.createElement('h3');
    titulo.textContent = tarea.nombre;
    divInformacion.appendChild(titulo);

    console.log("desc", tarea.descripcion);

    // 📃 p descripción
    let descripcion = document.createElement('p');
    descripcion.textContent = tarea.descripcion;
    divInformacion.appendChild(descripcion);

    // 👥 span "Integrantes"
    let tituloIntegrantes = document.createElement('span');
    tituloIntegrantes.textContent = "Integrantes";
    divInformacion.appendChild(tituloIntegrantes);

    // 👤 div integrantes
/*     let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "div-integrantes";

    tarea.integrantes.forEach(integrante => {
        let divIntegrante = document.createElement('div');
        divIntegrante.className = "div-integrante";
        divIntegrante.textContent = integrante;
        divIntegrantes.appendChild(divIntegrante);
    });

    divInformacion.appendChild(divIntegrantes); */

    div.appendChild(divInformacion);

    return div;


}


