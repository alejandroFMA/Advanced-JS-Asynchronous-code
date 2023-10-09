//RESUELVE TUS EJERCICIOS AQUI
//RESUELVE TUS EJERCICIOS AQUI
//EJERCICIO 1
function getAllBreeds () {
    

    return fetch("https://dog.ceo/api/breeds/list/all")
            .then(response => response.json())
            .then(breed => Object.keys(breed.message))
            .catch(function(error){
                    console.log(error)
                })
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
      fetch(`https://api.github.com/users/${username}`)
         .then(response => response.json())
         .then(data => data)
         
        let img = document.createElement("img");
        img.src = data.avatar_url;
     
        let name = document.createElement("h1")
        name.innerHTML = data.name;
     
        document.body.appendChild(img);
        document.body.appendChild(name);
        return {img, name}
     }
  
    //EJERCICIO 7
  
    function getAndPrintGitHubUserProfile(username) {
      fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
          let template = `<section>
          <img src="${data.avatar_url}" alt="Imagen de usuario">
          <h1>${data.name}</h1>
          <p>Repositorios públicos: ${data.public_repos}</p>
          </section>`;
        
          let tarjeta = document.createElement("div")
         
          tarjeta.innerHTML = template;
          
          document.body.appendChild(tarjeta);
      })
      .catch(function(error) {
          console.log(error);
      });
  }
  
  
  
    //EJERCICIO 8
  
  
  
  
  
  
  
    //EJERCICIO 9
    function fetchGithubUsers(userNames) {
  
    }