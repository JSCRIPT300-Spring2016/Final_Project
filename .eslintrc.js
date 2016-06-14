module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "dateStuff": true
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "jsx-quotes": [
            "error",
            "prefer-single"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "newline-before-return": [
            "error"
        ]
    }
};