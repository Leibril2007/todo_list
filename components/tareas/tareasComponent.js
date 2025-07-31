import { tarea } from "../../modules/itemTarea/itemTarea.js";

export function tareas(tareasOb){
    let divTareasSec = document.createElement('div');
    divTareasSec.className = "div-tareas-sec1";

    tareasOb.forEach((e, i) => {
        divTareasSec.appendChild(tarea(
            i + 1, // índice
            e.titulo,
            e.estado,
            e.fechaAsignacion,
            e.fechaEntrega,
            e.integrantes
        ));
    });

    return divTareasSec;
}