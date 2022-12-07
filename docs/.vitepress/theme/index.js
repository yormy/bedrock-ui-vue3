import DefaultTheme from 'vitepress/theme'
import PrimeVue from 'primevue/config'
import DemoContainer from '../components/DemoContainer.vue'
import BedrockUiVue3 from 'bedrock-ui-vue3'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import './custom.css'

import '../../../dist/resources/themes/bedrock-indigo/dark.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(PrimeVue)
    app.use(BedrockUiVue3)
    app.component('DemoContainer', DemoContainer)
  }
}
