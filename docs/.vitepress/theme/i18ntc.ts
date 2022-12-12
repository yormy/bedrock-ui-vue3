import {createI18n} from "vue-i18n";

const messages = {
    en: {
        message: {
            hello: 'hello world',
            package: 'hello package'
        },
        validator: {
            minLength: "Field '{attribute}' should be minimal {min} chars",
        }
    },
    nl: {
        message: {
            hello: 'Houdoe he'
        },
        validator: {
            minLength: "Veld '{attribute}' moet minmaal {min} tekens zijn",
        }
    }
}

const i18n = createI18n({
    allowComposition: true,
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})

export default {
    install: (app, options) => {
        function t(key, params) {

            const translated = i18n.global.t(key, params);

            return translated;
        }

       app.config.globalProperties.$t = t;

       app.provide("i18ntc", {t});
    }
};
//https://www.codemag.com/Article/2103071/The-Complete-Guide-to-Vue-3-Plug-ins-Part-2
