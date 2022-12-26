/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import ButtonPrimary from '../ButtonPrimary.vue';

describe('Button.vue', () => {
    it('should render ButtonPrimary button', () => {
        const wrapper = mount(ButtonPrimary, {
            slots: {
                default: h('span', { class: 'ml-2 font-bold' }, 'Default Button'),
            },
        });

        expect(wrapper.html()).toContain('p-button-raised');
    });
});
