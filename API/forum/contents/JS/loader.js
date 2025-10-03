window.onload = siteIsLoaded;

function siteIsLoaded()
{
    loadHeader();
    console.log("Header betöltve!");
    loadBorito();
    console.log("Borító betöltve!");
}

function loadHeader()
{
    let header = document.getElementById("header");

    fetch("../js/components/header.html").then(response => response.text()).then(data =>{
        header.innerHTML = data;
    });
}
function loadBorito()
{
    let borito = document.getElementById("borito");
    borito.style.backgroundImage = "url('../js/components/borito2.png')";
}