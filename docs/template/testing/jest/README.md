# Jest ts-starter

This sample uses `jest` for testing.

`jest.config.js` is the configuration file.

## Configuring Jest

The premise behind this configuration is to

1. Compile the typescript

2. Configure `jest` to only recognize tests in `bin/` and add it to `moduleDirectories`

    - Adding `bin` to `moduleDirectories` has a similar effect to `require`ing `module-alias/register`.

3. Feed the compiled typescript into `jest`