document.getElementById("submit").addEventListener('click', calendario);
function calendario(){
var anio = document.getElementById("año").value;


mod = anio % 12;

switch(mod){
    case 0:
        document.getElementById('mod').innerHTML = mod;
        signo.innerHTML= "Mono";
        document.getElementById("imagen").innerHTML = "<img src= './image/mono.jpeg'>";
        

    break;

    case 1:
        document.getElementById('mod').innerHTML = mod;
        signo.innerHTML= "Gallo";
        document.getElementById("imagen").innerHTML = "<img src= 'image/gallo.jpeg'>";
    break;

    case 2:
        document.getElementById('mod').innerHTML = mod;
        signo.innerHTML= "Perro";
        document.getElementById("imagen").innerHTML = "<img src= 'image/perro.jpeg'>";
    break;

    case 3:
        document.getElementById('mod').innerHTML = mod;
        signo.innerHTML= "Cerdo";
        document.getElementById("imagen").innerHTML = "<img src= 'image/cerdo.jpeg'>";
    break;

    case 4:
        document.getElementById('mod').innerHTML = mod;
        signo.innerHTML= "Rata";
        document.getElementById("imagen").innerHTML = "<img src= 'image/rata.jpeg'>";
    break;

    case 5:
        document.getElementById('mod').innerHTML = mod;
        signo.innerHTML= "Buey";
        document.getElementById("imagen").innerHTML = "<img src= 'image/buey.jpeg'>";
    break;

    case 6:
        document.getElementById('mod').innerHTML = mod;
        signo.innerHTML= "Tigre";
        document.getElementById("imagen").innerHTML = "<img src= 'image/tigre.jpeg'>";
    break;

    case 7:
        document.getElementById('mod').innerHTML = mod;
        signo.innerHTML= "Conejo";
        document.getElementById("imagen").innerHTML = "<img src= 'image/conejo.jpeg'>";
    break;

    case 8:
        document.getElementById('mod').innerHTML = mod;
        signo.innerHTML= "Dragón";
        document.getElementById("imagen").innerHTML = "<img src= 'image/dragon.jpeg'>";
    break;

    case 9:
        document.getElementById('mod').innerHTML = mod;
        signo.innerHTML= "Serpiente";
        document.getElementById("imagen").innerHTML = "<img src= 'image/serpiente.jpeg'>";
    break;

    case 10:
        document.getElementById('mod').innerHTML = mod;
        signo.innerHTML= "Caballo";
        document.getElementById("imagen").innerHTML = "<img src= 'image/caballo.jpeg'>";
    break;

    case 11:
        document.getElementById('mod').innerHTML = mod;
        signo.innerHTML= "Cabra";
        document.getElementById("imagen").innerHTML = "<img src= 'image/cabra.jpeg'>";
    break;


}
}