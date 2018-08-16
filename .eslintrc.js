module.exports = {
    "env": {
       "es6": true,
       "node": true
    },
    "parserOptions": {
      "ecmaVersion": 6,
      "ecmaFeatures": {
          "jsx": true,
          "modules": true,
        "spread" : true,
        "restParams" : true
      }
    },
    "rules": {        
        "no-irregular-whitespace": 2,       
        "no-regex-spaces": 2,       
        "no-multi-spaces": 2,        
        "key-spacing": [2, {
          "beforeColon": false,
          "afterColon": true
        }],
        "no-spaced-func": 2,
        "space-before-blocks": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-trailing-spaces": 2,
        "no-multiple-empty-lines": 2,
        "keyword-spacing": 2,       
        "spaced-comment": 2,
        "indent": ["error", 2],       
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": true
    }
}

