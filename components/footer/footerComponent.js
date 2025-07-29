export function footer(){
    let footer = document.createElement('footer');

    let textGithub = document.createElement('span');
    textGithub.className = "text-github";
    
    let link = document.createElement('a');
    link.href = "https://github.com/tu-usuario"; // reemplaza con tu URL de GitHub
    link.textContent = "@github";
    
    textGithub.appendChild(link);
    footer.appendChild(textGithub);
    
    return footer;
}