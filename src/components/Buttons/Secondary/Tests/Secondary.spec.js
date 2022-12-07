/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Button from '../Secondary.vue';

describe('Button.vue', () => {
    it('should render Secondary button', () => {
        const wrapper = mount(Button, {
            slots: {
                default: h('span', { class: 'ml-2 font-bold' }, 'Default Button'),
            },
        });

        expect(wrapper.html()).toContain(
            'p-button-outlined'
        );
    });
});
