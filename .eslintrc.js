module.exports = {
    extends: ['airbnb', 'prettier'],
    parser: 'babel-eslint',
    plugins: ['prettier', 'react', 'jsx-a11y', 'import', 'prefer-arrow'],
    rules: {
        'prettier/prettier': ['error'],
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                disallowPrototype: true,
                singleReturnOnly: false,
                classPropertiesAllowed: true,
            },
        ],
        'prefer-template': ['error'],
    },
};
