
const button = document.querySelector("button");
        
     

    let fort = function(){
                
        //Creando las variables de la URL y una nueva xml Request
        const peticionURLFort = "https://ricardofort.herokuapp.com/"
        const peticionURLWiki = "https://es.wikipedia.org/wiki/Special:Random"
        const peticion = new XMLHttpRequest();

        // abrimos la URL
        peticion.open('GET', peticionURLFort);
        //le decimos que lo que va a recibir sera un json
        peticion.responseType= 'json';
        //Enviamos la request
        peticion.send();

        let array= [];

        peticion.onload = function(variable){
            const frase = peticion.response;
            document.getElementById("frase-fort").innerHTML = frase.frase;
            return (frase);
        }

    }

button.onclick = () => {
 fort();

    
    

};