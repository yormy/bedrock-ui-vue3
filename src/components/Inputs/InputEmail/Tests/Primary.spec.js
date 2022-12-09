/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Button from '../Primary.vue';

describe('Button.vue', () => {
    it('should render Primary button', () => {
        const wrapper = mount(Button, {
            slots: {
                default: h('span', { class: 'ml-2 font-bold' }, 'Default Button'),
            },
        });

        expect(wrapper.html()).toContain(
            'p-button-raised'
        );
    });
});

