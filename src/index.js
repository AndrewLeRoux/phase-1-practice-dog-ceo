const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



document.addEventListener('DOMContentLoaded', () => {
    
    // loads imgs
    fetch(imgUrl)
    .then(function (response) {
        return response.json();
      })
    .then (function (json) {
        for (const img of json.message){
            let i = document.createElement('img')
            i.src = img
            document.querySelector('#dogImageContainer').appendChild(i)
        }
    })

    // loads dog breeds
    fetch(breedUrl)
    .then(function (response) {
        return response.json();
      })
    .then (function (json) {
        for (const breed in json.message){
            for (const secondname of json.message[breed]){
            let i = document.createElement('li')
            i.textContent = `${secondname} ` + breed
            i.className = 'dog'
            document.querySelector('#dogBreeds').appendChild(i)
            }
        }

        // change color of dog text
        let dogBreed = document.querySelectorAll('.dog')
        for (const dog of dogBreed) {
            dog.addEventListener('click', () => {
                dog.style.color = 'blue'
                
            })
        }
        
        let dropdownMenu = document.getElementById("breed-dropdown")
        dropdownMenu.addEventListener('change', (e) => {
            let firstLetter = e.target.value

            if (firstLetter === 'all') {
                for (const dog of dogBreed) {
                    dog.style = ''
                }
            }
            else{
                for (const dog of dogBreed) {
                    dog.style = ''
                }
            
                for (const dog of dogBreed) {
                    if (dog.innerText[0] !== firstLetter){
                    dog.style = "display: none;"
                    }

                }
            }
        })

    })




})

