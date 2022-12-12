/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import InputEmail from '../InputEmail.vue';

describe('InputEmail.vue', () => {
    it('should render InputEmail', () => {
        const wrapper = mount(InputEmail, {
            provide: () => ({
                i18ntc: 'i18ntc', // to prevent warnings because there was no provider in the testset
            }),
        });

        expect(wrapper.html()).toContain('p-inputtext');
    });
});
