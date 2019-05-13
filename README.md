# ts-starter

Since this file will be changed, please see `docs/template` for documentation.

## Prerequisites

This repository assumes a global installation of TypeScript (`npm i -g typescript).

To use a repo-local instance of typescript, run `npm i typescript`. You should be good-to-go from there.

## Basic Information

All source files in `src` are compiled to `<project root>/bin`

Paths for absolute imports in the compiled javascript are defined in `package.json`

Paths for absolute imports in Typescript are defined in `tsconfig.json`.

## Getting Started

- `npm install`

- Run platform specific start script (`npm start` or `npm start:win`)

### Testing

This repo uses [AVA](https://github.com/avajs/ava) for testing. 

Future guides to setting up other testing configurations will be in `docs/template`