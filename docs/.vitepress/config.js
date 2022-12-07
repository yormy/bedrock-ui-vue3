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
            ],
        },
        {
            text: 'Button',
            children: [
                { text: 'Primary A', link: '/components/button/primary' },
            ],
        },
        {
            text: 'Components',
            children: [
                {
                    text: 'Button',
                    children: [
                        { text: 'Primary A', link: '/components/button/primary' },
                    ],
                },
              { text: 'Component A', link: '/components/component-a' },
              { text: 'Component B', link: '/components/component-b' },
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
