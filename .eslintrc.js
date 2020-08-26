module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
    plugins: ['@typescript-eslint', 'react-hooks'],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/curly': ['off'],
        'no-debugger': ['warn'],
        'react/display-name': ['off'],
        'react/prop-types': ['off'],
        semi: ['warn', 'never'],
        'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
        indent: ['warn', 4, { "SwitchCase": 1 }],
    },
}