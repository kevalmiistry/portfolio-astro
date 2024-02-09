/** @type {import("prettier").Config} */
const config = {
    plugins: [
        require.resolve("prettier-plugin-tailwindcss"),
        require.resolve("prettier-plugin-astro"),
    ],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
    semi: false,
    singleQuote: false,
    tabWidth: 4,
    useTabs: false,
    trailingComma: "es5",
}

module.exports = config
