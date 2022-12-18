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
                { text: 'Checkbox',
                    children: [
                        { text: 'Normal', link: '/components/select/checkbox/checkbox' },
                        { text: 'Agree', link: '/components/select/checkbox/checkbox-must-agree' },
                        { text: 'Motivated', link: '/components/select/checkbox/checkbox-motivated-agree' },
                    ]
                },
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
                { text: 'Icons & Badges', link: '/components/button/icons' },
                { text: 'Colors', link: '/components/button/colors' },
                { text: 'States', link: '/components/button/states' },
                { text: 'Sizes', link: '/components/button/sizes' },
                { text: 'Set', link: '/components/button/set' },
            ],
        },
        {
            text: 'Blocks',
            children: [
                {
                    text: 'Auth',
                    children: [
                        {text: 'Login', link: '/blocks/auth/login'},
                        {text: 'Reset Password', link: '/blocks/auth/resetpassword'},
                    ]
                }
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
