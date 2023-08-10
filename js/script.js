var toggleMode = () => {
    const html = document.documentElement;

    html.classList.toggle("light");

    const isLight = html.classList.contains("light");
    const srcValue = isLight ? "../img/avatar-light.jpg" : "../img/avatar.jpg";
    const altValue = isLight ? "Imagem de perfil com um avatar  na cor azul" : "Imagem de perfil com um avatar na cor vermelha";

    document.querySelector("#profile img").setAttribute("src",srcValue);
    document.querySelector("#profile img").setAttribute("alt",altValue);

    
};