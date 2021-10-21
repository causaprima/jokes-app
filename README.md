# Homework Week 2. Jokes application

## Features
* Two functions to parse jokes
* Benchmark tests for joke parsing
* CLI with [commander](https://github.com/tj/commander.js)
* TSDoc to joke.ts

## Installation

```bash
$ npm install
```

## Running the app

```bash
# to get joke
$ npx ts-node src/index.ts joke

# to get joke with different functions
$ npx ts-node src/index.ts joke -f async

# to get joke with category
$ node src/index.ts joke dark

# to get help with joke
$ npx ts-node src/index.ts joke --help


# to start benchmark
$ npx ts-node src/index.ts benchmark 20

# to get help with benchmark
$ npx ts-node src/index.ts benchmark --help
```

## TSDoc
* docs/modules.html