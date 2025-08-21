import { tarea } from "../../modules/itemTarea/itemTarea.js";

export function tareas(tareasOb){
    let divTareasSec = document.createElement('div');
    divTareasSec.className = "div-tareas-sec1";

    tareasOb.forEach((e, i) => {
        divTareasSec.appendChild(tarea(
            i + 1, // índice
            e.nombre,
            e.estado_tarea,
            e.fecha_asignada,
            e.fecha_entrega,
            []
        ));
    });

    return divTareasSec;
}