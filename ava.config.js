// See AVA docs for configuration
// https://github.com/avajs/ava/blob/master/docs/06-configuration.md
export default {
    require: ['esm', 'module-alias/register'],
    files: [
        "bin/**/*.test.js",
        "bin/**/*.t.js",
        "!docs"
    ],
    sources: [
        "**/*.{ts,tsx}",
        "!bin"
    ],
    cache: true,
	concurrency: 5,
    failFast: false,
    tap: true,
};