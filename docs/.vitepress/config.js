const path = require('path')

module.exports = {
    title: 'Bedrock UI Vue3',
    description: 'Package with internal components',
    themeConfig: {
    repo: '...repo-here....',
    sidebar: [
        {
            text: 'Introduction',
            children: [
                { text: 'What is My Lib?', link: '/' },
                { text: 'Getting Started', link: '/guide/' },
                { text: 'template', link: '/guide/template' },
            ],
        },
        {
            text: 'Select',
            children: [
                { text: 'Language', link: '/components/select/language' },
            ],
        },
        {
            text: 'Modal',
            children: [
                { text: 'Modal', link: '/components/modal/modal' },
            ],
        },
        {
            text: 'Input',
            children: [
                { text: 'Text', link: '/components/input/text' },
                { text: 'Email', link: '/components/input/email' },
                { text: 'Password', link: '/components/input/password' },
            ],
        },
        {
            text: 'Button',
            children: [
                { text: 'Buttons', link: '/components/button/buttons' },
                { text: 'Colors', link: '/components/button/colors' },
                { text: 'States', link: '/components/button/states' },
                { text: 'New', link: '/components/button/new' },
                { text: 'Set', link: '/components/button/set' },
            ],
        }
    ],
    },
    vite: {
        resolve: {
            alias: {
                'bedrock-ui-vue3': path.resolve(__dirname, '../../src'),
            },
            dedupe: ['vue', /primevue\/.+/], // avoid error when using dependencies that also use Vue
        }
    }
}
