import DefaultTheme from 'vitepress/theme'
import PrimeVue from 'primevue/config'
import DemoContainer from '../components/DemoContainer.vue'
import BedrockUiVue3 from 'bedrock-ui-vue3'
// import 'primeicons/primeicons.css'
// import '../../../src/assets/themes/core/core.min.css';
import 'primeflex/primeflex.css'

import Layout from '../components/Layout.vue'
import ViteTheme from './vite-theme.css'


import '../../../resources/scss/vendor/flags/css/flag-icon.min.css';
import '../../../resources/icons/fontawesome-pro6/css/all.css';
import '../../../resources/public/shared/css/icons/icons.css';


// import '../../../src/assets/scss/vendor/yframe/themes/dark/theme.css';
import '../../../src/assets/scss/themes/ds-indigo/theme.css';

export { ViteTheme }

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
