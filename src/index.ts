import { program, Argument, Command } from 'commander'
import { getJokeWithThen, getJokeWithAsync } from './joke'
import { parseJokesTest1, parseJokesTest2 } from './benchmark'

function jokeCommand() {
    const joke = new Command('joke')
    joke
        .addArgument(new Argument('[type]', 'joke type').choices(['any', 'programming', 'misc', 'dark', 'pun', 'spooky', 'christmas']).default('any'))
        .description('get one joke by it`s type')
        .option('-f, --func_mode [mode]', `Which function to use ('then' or 'async')`, 'then')
        .action((type, options) => {
            switch (options.func_mode) {
                case 'then': {
                    getJokeWithThen(type);
                    break;
                }
                case 'async': {
                    getJokeWithAsync(type);
                    break;
                }
                default: console.log('Wrong mode')
            }
        })
    return joke
}

function benchmarkCommand() {
    const benchmark = new Command('benchmark')
    benchmark
        .description('start benchmark tests of parsing jokes')
        .argument('<number>', 'number of jokes (requests)')
        .action(n => {
            if (!isNaN(n) && Number(n) > 0) {
                parseJokesTest1(Number(n))
                parseJokesTest2(Number(n))                
            }
            else {
                console.log('error: wrong number')
            }

        })
    return benchmark
}

program.addCommand(jokeCommand())
program.addCommand(benchmarkCommand())

try {
    program.parse(process.argv)
} catch(err) {
    console.log(err)
}