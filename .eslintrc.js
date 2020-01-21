module.exports = {
    parser:  '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    env:{
        browser: true,
        node: true,
    },
    rules: {
        '@typescript-eslint/no-var-requires': ["off"],
        "@typescript-eslint/no-unused-vars": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "semi": ["warn", "never"],
        "no-console": ["warn", { allow: ["warn", "error", "info"] }],
        "indent": ["warn", 4]
    },
    env: {
        browser: true,
    }
}