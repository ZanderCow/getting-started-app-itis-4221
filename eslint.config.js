module.exports = [
    {
        ignores: [
            'src/static/js/babel.min.js',
            'src/static/js/react-bootstrap.js',
            'src/static/js/react-dom.production.min.js',
            'src/static/js/react.production.min.js',
        ],
    },
    {
        files: ['src/static/js/app.js'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'script',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                document: 'readonly',
                fetch: 'readonly',
                React: 'readonly',
                ReactBootstrap: 'readonly',
                ReactDOM: 'readonly',
            },
        },
        rules: {
            'no-dupe-keys': 'error',
            'no-redeclare': 'error',
            'no-undef': 'error',
            'no-unreachable': 'error',
            'no-unused-expressions': 'error',
            'no-unused-vars': 'error',
        },
    },
];
