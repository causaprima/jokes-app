import get from 'axios'
import { getJokeWithThen, getJokeWithAsync } from './joke'

export async function parseJokesTest1(n: number) {
    const startTime = performance.now()
    for (let i = 0; i < n; i++) {
       await getJokeWithAsync('any', false)
    }
    const endTime = performance.now()
    const resultTime = endTime - startTime
    console.log(`test1 (using 'async/await' and 'for loop') done in ${resultTime}`)
}

export function parseJokesTest2(n: number) {
    let types = new Array<string>(n)
    types.fill('any')

    const startTime = performance.now()
    Promise.all(types.map(type => getJokeWithThen(type, false)))
    const endTime = performance.now()
    const resultTime = endTime - startTime
    console.log(`test2 (using 'promise.all') done in ${resultTime}`)
}