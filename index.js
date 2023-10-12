//RESUELVE TUS EJERCICIOS AQUI
//EJERCICIO 1

function getAllBreeds () {
    return fetch("https://dog.ceo/api/breeds/list/all")
            .then(response => response.json())
            .then(breed => Object.keys(breed.message))
}
    
    
    //EJERCICIO 2
    function getRandomDog() {    
        return fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(breed => breed.message)
    }
    
    //EJERCICIO 3
    function getAllImagesByBreed() {
        return fetch("https://dog.ceo/api/breed/komondor/images")
        .then(response => response.json())
        .then(breed => breed.message)
    }
    
    
    //EJERCICIO 4
    function getAllImagesByBreed2(breed) {
        return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(response => response.json())
        .then(data => data.message)
    }
    
    
    
    //EJERCICIO 5
    function getGitHubUserProfile(username) {
        return fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => data)
    }
    
    
    //EJERCICIO 6 
    
    function printGithubUserProfile(username) {
      return fetch(`https://api.github.com/users/${username}`)
         .then(res => res.json())
         .then(res => {
            let name = res.name;
            let img = res.avatar_url;
            let usuario = document.createElement("h1")
            let imagen = document.createElement("img");
            let objeto = { img: { src: img }, name: name };
            document.body.appendChild(imagen);
            document.body.appendChild(usuario);
            imagen.src = img;
            usuario.innerHTML = name;
            return objeto}
         
     )};
  
    //EJERCICIO 7
  
    function getAndPrintGitHubUserProfile(username) {
        return fetch(`https://api.github.com/users/${username}`)
          .then((res) => res.json())
          .then((res) => {
            let img = res.avatar_url;
            let name = res.name;
            let repos = res.public_repos;
            console.log(img, name, repos);
      
            return `<section>
            <img src="${img}" alt="${name}">
            <h1>${name}</h1>
            <p>Public repos: ${repos}</p>
        </section>`;
          });
      } 
      


  
    //EJERCICIO 8 8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después llamaremos a la función **getAndPrintGitHubUserProfile(username)** que se ejecute cuando se pulse el botón buscar.(Esto no se testea).
  
const body = document.querySelector("body"); //body porque no sabemos dónde meterlo

const usernameInput = document.createElement("input"); // se crea input de texto
usernameInput.type = "text";
usernameInput.id = "username";
usernameInput.placeholder = "Username";

const buscarBoton = document.createElement("button"); // se crea boton de busqueda
buscarBoton.id = "search";
buscarBoton.textContent = "Buscar";


body.appendChild(usernameInput);
body.appendChild(searchButton);


searchButton.addEventListener("click", () => {
    const username = usernameInput.value; //es el value del input de texto
  
    getAndPrintGitHubUserProfile(username); // ejecutamos la función
  });
  
  
  
  
  
  
    /*EJERCICIO 9Dada una lista de usuarios de github guardada en una array,crea una funcion **fetchGithubUsers(userNames)** que utilice 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario.
    Objetivo: Usar Promise.all()\
    Recordatorio: Una llamada a fetch() devuelve un objeto promesa.\
    Pregunta. ¿cuántas promesas tendremos?

    Hasta que no se resuelvan todas las promesas desencadenadas por cada fetch(), no se cargarán los datos.

    Pasos:

    - Mapear el array y hacer un fetch() para cada usuario. Esto nos de vuelve un array lleno de promesas.
    - Con Promise.all() harás que se tenga que resolver todo el proceso de peticiones a GitHub a la vez.
    - Cuando Promise.all() haya terminado:
    Consigue que se imprima por consola la url del repositorio de cada usuario.
    Consigue que se imprima por consola el nombre de cada usuario.*/
    
   
    function fetchGithubUsers(usernames) {
        return Promise.all(
            usernames.map(username =>
            fetch(`https://api.github.com/users/${username}`)
              .then(response => response.json())
              .then(data => {
                console.log(`URL del repositorio de ${username}: ${data.html_url}`);
                console.log(`Nombre de usuario: ${data.name}`);
              })
              
          )
        );
    }
  

  

