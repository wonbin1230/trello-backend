module.exports = {
    "root": true,
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "ignorePatterns": [
        "node_modules/**/*"
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "no-unused-vars": "error",
        "no-var": "error",
        "no-empty-function": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxBOF": 0,
                "maxEOF": 0
            }
        ],
        "curly": "error",
        "brace-style": ["error", "stroustrup"],
        "eqeqeq": "error",
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "dot-notation": ["error"]
    }
};