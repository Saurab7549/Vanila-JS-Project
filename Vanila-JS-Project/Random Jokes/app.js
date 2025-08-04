const Joke = document.querySelector('.get_Result')
const btn = document.querySelector('.btn')

async function generateJoke() {
    const header = {
        headers : {'X-Api-Key': 'JFxkQ9zPBMCrV4HaefpL2Q==BmAlr5hzO2vstdDS'}
    }
    const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=3';

    let dadJoke = await fetch(url,header);
    console.log(dadJoke)
    dadJoke = await dadJoke.json();
    console.log(dadJoke)
    Joke.innerHTML = dadJoke[0].joke;
    
}

btn.addEventListener('click',generateJoke);
