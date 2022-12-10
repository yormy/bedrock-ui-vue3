import DefaultTheme from 'vitepress/theme'
import PrimeVue from 'primevue/config'
import DemoContainer from '../components/DemoContainer.vue'
import BedrockUiVue3 from 'bedrock-ui-vue3'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import './custom.css'

import Layout from '../components/Layout.vue'
import DarkTheme from './dark-theme.css'

import '../../../dist/resources/themes/bedrock-indigo/theme.css';

import '../../../resources/icons/fontawesome-pro6/css/all.css';
import '../../../resources/public/shared/css/icons/icons.css';

export { DarkTheme }

export default {
  ...DefaultTheme,
    Layout: Layout,
  enhanceApp({ app }) {
    app.use(PrimeVue)
    app.use(BedrockUiVue3)
    app.component('DemoContainer', DemoContainer)
  }
}
