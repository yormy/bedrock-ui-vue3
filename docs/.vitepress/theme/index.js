import DefaultTheme from 'vitepress/theme'
import PrimeVue from 'primevue/config'
import DemoContainer from '../components/DemoContainer.vue'
import BedrockUiVue3 from 'bedrock-ui-vue3'

import '../../../src/assets/themes/core/core.min.css';
import '../../../src/assets/themes/addon.css';
import '../../../src/assets/css/vendor/flags/css/flag-icon.min.css';

import 'primeflex/primeflex.css'
// import 'primeicons/primeicons.css'

import './custom.css'

import Layout from '../components/Layout.vue'
import DarkTheme from './dark-theme.css'

import '../../../src/assets/themes/bedrock-indigo/theme.css';

import '../../../resources/icons/fontawesome-pro6/css/all.css';
import '../../../resources/public/shared/css/icons/icons.css';

export { DarkTheme }

import i18ntc from './i18ntc';

import ToastService from 'primevue/toastservice';

export default {
  ...DefaultTheme,
    Layout: Layout,
  enhanceApp({ app }) {
    app.use(PrimeVue)
    app.use(ToastService)
    app.use(BedrockUiVue3)
    app.use(i18ntc)
    app.component('DemoContainer', DemoContainer)
  }
}
