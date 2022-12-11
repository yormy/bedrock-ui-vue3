import * as validators from '@vuelidate/validators'
import {createI18n} from "vue-i18n";

import { createI18nMessage } from '@vuelidate/validators'
//const { createI18nMessage } = validators

const messages = {
    en: {
        message: {
            hello: 'hello world',
            validations: {
                'required' : 'test'
            }
        },
        validations: {
            'required' : 'test'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    }
}

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})


// Create your i18n message instance. Used for vue-i18n@9
//
const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) })
// for vue-i18n@8
// const withI18nMessage = createI18nMessage({ t: i18n.t.bind(i18n) })

// wrap each validator.
export const required = withI18nMessage(validators.required)
// validators that expect a parameter should have `{ withArguments: true }` passed as a second parameter, to annotate they should be wrapped
export const minLength = withI18nMessage(validators.minLength, { withArguments: true })
// or you can provide the param at definition, statically
export const maxLength = withI18nMessage(validators.maxLength(10))
export const email = withI18nMessage(validators.maxLength(10))
