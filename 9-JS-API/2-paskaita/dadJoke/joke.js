function onGetJokeClick() {

async function fetchJokes() {
    try {
        const response = await fetch("https://icanhazdadjoke.com", {
         headers: {Accept: "application/json"}
        })
        const joke = await response.json()
        return joke
    } catch(e) {
        throw e
    }
}

fetchJokes()
.then(data=> document.getElementById('jokeArea').innerHTML=data.joke)
.catch(e=> console.log('Error'))
}

