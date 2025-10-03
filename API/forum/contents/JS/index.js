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

    fetch("contents/JS/components/header.html").then(response => response.text()).then(data =>{
        header.innerHTML = data;
    });
}
function loadBorito()
{
    document.getElementById("borito")

    borito.style.backgroundImage = "url('contents/JS/components/borito2.png')";

}


function Hider(ThreadId)
{
    let x = document.getElementById('table-' + ThreadId);
    let y = document.getElementById('hider-' + ThreadId);
    if (x.style.display === 'none') {
        x.style.display = "table";
        y.innerHTML="Elrejtés";
    } else {
        x.style.display = "none";
        y.innerHTML="Megjelenítés";
    }
}


