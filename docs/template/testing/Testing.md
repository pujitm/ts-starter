# Testing

The template is pre-configured to use [AVA](https://github.com/avajs/ava)

The configuration file is `ava.config.js`

## Out-of-the-Box

Tests are recognized from `import test from 'ava';` declarations. Both `__tests__` and `tests` are supported.

## Configuring AVA

Here's the general premise behind this configuration:

- Compile `src` first (use `npm` scripts in `package.json`)

- Use compiled `*.js` files (in `bin/`) to test

- `require` the following modules before running the tests: (done via `require` list in `ava.config.js`)
    - `module-alias/register` 

## Using other testing frameworks

Here's a list of testing frameworks we have working samples for:

- [Jest](./jest/README.md)