/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import InputText from '../InputText.vue';

describe('InputPassword.vue', () => {
    it('should render InputText', () => {
        const wrapper = mount(InputText, {
            provide: () => ({
                i18ntc: 'i18ntc', // to prevent warnings because there was no provider in the testset
            }),
        });

        expect(wrapper.html()).toContain('p-inputtext');
    });
});
