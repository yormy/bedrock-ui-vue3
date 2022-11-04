module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint-config-prettier',
        'eslint:recommended',
        '@vue/eslint-config-airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: [
        "vue",
        "@typescript-eslint",
    ],
    parser:  'vue-eslint-parser',
    parserOptions: {
        "ecmaVersion":  "latest",
        "parser":  "@typescript-eslint/parser",
        "sourceType":  "module"
    },
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],

        'no-console': process. env. NODE_ENV ===  'production' ? [ 'error', {  allow: [ 'error',  'warn'] }] :  'off',  //The production mode does not allow the use of log
        'no-debugger': process. env. NODE_ENV ===  'production' ?  'warn' :  'off',  //The production default does not allow the use of debugger
        '@typescript-eslint/no-unused-vars': [ 'error', {  varsIgnorePattern:  '.*',  args:  'none' }],  //variable declaration is not used
        '@typescript-eslint/no-explicit-any':  'off',  // allow ts to use any
        // '@typescript-eslint/no-var-requires': 'off', // Force use of import and disallow setting off with require to turn off checking
        // 'vue/require-v-for-key': 'off', // Check the reserved element v-for in vue3 will automatically append the key value, so there is no need to force the addition of the key attribute, so the filling of the key is not checked
        // 'vue/valid-v-for': 'off', // For non-reserved (custom) elements, v-for in vue3 will automatically append the key value, so there is no need to force the addition of the key attribute, so the key is not checked fill in
        // // Add component naming ignore rule vue's official default rule is multi-word camel case for component naming
        // 'vue/multi-word-component-names': [
        // 'warn',
        // {
        // ignores: ['index'], //Component names to ignore
        // },
        // ],
    }
}
