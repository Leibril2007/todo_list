export function header(){

    let header = document.createElement('header');
    
    let h1 = document.createElement('h1'); 
    h1.textContent = "Todo-List";
    header.appendChild(h1);

    let divTareas = document.createElement('div');
    divTareas.className = "div-tareas";

    let h2 = document.createElement('h2');
    h2.className = "h2-pendientes";
    h2.textContent = "Pendientes";
    divTareas.appendChild(h2);

    let numeroPendientesDiv = document.createElement('div');
    numeroPendientesDiv.className = "numero-pendientes-div";
    numeroPendientesDiv.textContent = "8";
    divTareas.appendChild(numeroPendientesDiv);

    header.appendChild(divTareas);

    let divLogoUsuario = document.createElement('div');
    divLogoUsuario.className = "div-logo-usuario";
    divLogoUsuario.textContent = "👤";
    header.appendChild(divLogoUsuario);

    return header;

}