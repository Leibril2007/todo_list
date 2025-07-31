import { tarea } from "../../modules/itemTarea/itemTarea.js";

let tareasOb = [
    {
        titulo: "gatito1",
        estado: "completado",
        fechaAsignacion: "17/05/2025",
        fechaEntrega: "30/07/2025",
        integrantes: ["🧑‍🎓", "👩‍🏫", "🧑‍🏫"]
    },
    {
        titulo: "gatito2",
        estado: "pendiente",
        fechaAsignacion: "18/05/2025",
        fechaEntrega: "01/08/2025",
        integrantes: ["👨‍🏫", "🧑‍🎓"]
    },
    {
        titulo: "gatito3",
        estado: "en progreso",
        fechaAsignacion: "19/05/2025",
        fechaEntrega: "05/08/2025",
        integrantes: ["🧑‍🎓", "👩‍🏫"]
    }
];

export function tareas(){
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