# jest
install jest
write first test
add to build


enforce script above or below template?
async loading of components


    "scripts": {
        "build:lib": "npm run build:check && npm run build:package",
        "build:package": "npm run clean && NODE_ENV=production rollup -c && node build-meta && node api-generator/build-api && gulp build-styles",

        "build:check": "npm run lint && npm run format:check && npm run security:check && npm run test:unit",
        "security:check": "npm audit --production --audit-level high",
        "format": "prettier --write \"**/*.{js,vue,d.ts}\"",
        "format:check": "prettier --check \"**/*.{js,vue,d.ts}\"",
        "lint": "vue-cli-service lint",
        "lint:fix": "vue-cli-service lint --fix",
        "test:unit": "vue-cli-service test:unit --max-warnings=0",


# JEST
https://github.com/kouts/vue3-ts-vite-starter-template
