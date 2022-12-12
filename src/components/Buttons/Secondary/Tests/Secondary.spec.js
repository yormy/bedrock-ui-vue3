/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import ButtonSecondary from '../ButtonSecondary.vue';

describe('Button.vue', () => {
    it('should render ButtonSecondary button', () => {
        const wrapper = mount(ButtonSecondary, {
            slots: {
                default: h('span', { class: 'ml-2 font-bold' }, 'Default Button'),
            },
        });

        expect(wrapper.html()).toContain('p-button-outlined');
    });
});
