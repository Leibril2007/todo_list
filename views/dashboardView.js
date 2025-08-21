import { header } from "../components/header/headerComponent.js";
import { tareas } from "../components/tareas/tareasComponent.js";
import { informacion } from "../components/informacion/informacionComponent.js";
import { footer } from "../components/footer/footerComponent.js";


export async function dashboard() {
    
    try {
        
        const resultado = await fetch("https://backend-todo-list-b3c8.onrender.com/tareas");
        const datos = await resultado.json();
        console.log("datitos", datos);

        let tareasOb = datos;

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

    } catch (error) {
        console.error("ERROR: ", error);
    }

}


/*
export function dashboard2(){

    let tareasOb = [];

    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    //header
    dashboard.appendChild(header());

    //seccion1
    let seccion1 = document.createEleme nt('section');
    seccion1.className = "seccion-1";

    seccion1.appendChild(tareas(tareasOb));
    seccion1.appendChild(informacion(tareasOb[0]));

    dashboard.appendChild(seccion1);

    //footer
    dashboard.appendChild(footer());

    return dashboard;
}
*/

dashboard().then(elemento => {
    document.body.appendChild(elemento);
});
