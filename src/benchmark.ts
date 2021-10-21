import get from 'axios'

export async function parseJokesTest1(n: number) {
    const startTime = performance.now()
    for (let i = 0; i < n; i++) {
       await get('https://v2.jokeapi.dev/joke/Any')
    }
    const endTime = performance.now()
    const resultTime = endTime - startTime
    console.log(`test1 (using 'async/await' and 'for loop') done in ${resultTime}`)
}

export function parseJokesTest2(n: number) {
    let urls = new Array<string>(n)
    urls.fill('https://v2.jokeapi.dev/joke/Any')

    const startTime = performance.now()
    Promise.all(urls.map(url => get(url)))
    const endTime = performance.now()
    const resultTime = endTime - startTime
    console.log(`test2 (using 'promise.all') done in ${resultTime}`)
}