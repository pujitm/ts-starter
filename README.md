# ts-starter

[![CircleCI](https://circleci.com/gh/pujitm/ts-starter/tree/master.svg?style=svg)](https://circleci.com/gh/pujitm/ts-starter/tree/master)

Since this file will be changed, please see `docs/template` for documentation.

## Prerequisites

Use an LTS-version of Node.js or later. This was developed in `node=v11.6.0` and `npm=6.5.0`

## Basic Information

All source files in `src` are compiled to `<project root>/bin`

Module resolution (post-compile) via `module-alias`

Paths for absolute imports in the compiled javascript are defined in `package.json`

Paths for absolute imports in Typescript are defined in `tsconfig.json`.

## Getting Started

- `npm install`

- Run platform specific start script (`npm start` or `npm start:win`)

### Testing

This repo uses [AVA](https://github.com/avajs/ava) for testing and [c8](https://github.com/bcoe/c8#readme) for coverage (feel free to change to `nyc`). 

Documentation for other testing frameworks is under `docs/template/testing`
