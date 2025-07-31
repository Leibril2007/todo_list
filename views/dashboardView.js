import { header } from "../components/header/headerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/informacionComponent.js";
import { footer } from "../components/footer/footerComponent.js";

export function dashboard(){

    let tareasOb = [
        {
            titulo: "gatito1",
            estado: "completado",
            fechaAsignacion: "17/05/2025",
            fechaEntrega: "30/07/2025",
            integrantes: ["😇", "😊", "😎"],
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            titulo: "gatito2",
            estado: "pendiente",
            fechaAsignacion: "18/05/2025",
            fechaEntrega: "01/08/2025",
            integrantes: ["😇", "😊"],
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            titulo: "gatito3",
            estado: "en progreso",
            fechaAsignacion: "19/05/2025",
            fechaEntrega: "05/08/2025",
            integrantes: ["😇", "😊"],
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        }
    ];

    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    //header
    dashboard.appendChild(header());

    //seccion1
    let seccion1 = document.createElement('section');
    seccion1.className = "seccion-1";

    seccion1.appendChild(tareas(tareasOb));
    seccion1.appendChild(informacion(tareasOb[0]));

    dashboard.appendChild(seccion1);

    //footer
    dashboard.appendChild(footer());

    return dashboard;
}

document.body.appendChild(dashboard());