// https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    extends: [
        'eslint-config-mfe/eslintrc.es6.js',
    ],
    rules: {
        // enable additional rules
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'no-console': 'off',
        'no-return-assign': 'off',
        'no-mixed-operators': 'off',
    },
}
