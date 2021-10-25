import axios from 'axios'

type data = {
    error: boolean,
    category: string,
    type: string,
    joke?: string
    setup?: string,
    delivery?: string,
    flags: {
        nsfw: boolean,
        religious: boolean,
        political: boolean,
        racist: boolean,
        sexist: boolean,
        explicit: boolean
    },
    id: number,
    safe: boolean,
    lang: string
}

/**
 * Output a joke of a given type to the consol (using .then/.catch)
 * @param {string} jokeType - Joke category/type ('any', 'programming', 'misc', 'dark', 'pun', 'spooky', 'christmas')
 * @param {boolean=true} logJoke - To console.log received joke or not
 * @returns {void} Nothing
 */
export function getJokeWithThen(jokeType: string, logJoke: boolean = true): void {
    axios.get<data>('https://v2.jokeapi.dev/joke/' + jokeType)
        .then((response) => response.data)
        .then((jokeData) => {
            if (logJoke) {
                if (jokeData.type === 'single') {
                    console.log('\n' + jokeData.joke + '\n')
                } else {
                    console.log('\n' + jokeData.setup + '\n')
                    setTimeout(() => console.log(jokeData.delivery + '\n'), 2000)
                }
            }
        })
        .catch(err => console.log(err))
}

/**
 * Output a joke of a given type to the consol (using async/await)
 * @param {string} jokeType - Joke category/type ('any', 'programming', 'misc', 'dark', 'pun', 'spooky', 'christmas')
 * @param {boolean=true} logJoke To console.log received joke or not
 * @returns {Promise<void>} Promise
 */
export async function getJokeWithAsync(jokeType: string, logJoke: boolean = true): Promise<void> {

    try {
        let response = await axios.get<data>('https://v2.jokeapi.dev/joke/' + jokeType)
        if (logJoke) {
            let jokeData = response.data
            if (jokeData.type === 'single') {
                console.log('\n' + jokeData.joke + '\n')
            } else {
                console.log('\n' + jokeData.setup + '\n')
                setTimeout(() => console.log(jokeData.delivery + '\n'), 2000)
            }
        }
    } catch(err) {
        console.log(err)
    }
}