/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import ButtonTertiary from '../ButtonTertiary.vue';

describe('ButtonTertiary.vue', () => {
    it('should render ButtonTertiary button', () => {
        const wrapper = mount(ButtonTertiary, {
            slots: {
                default: h('span', { class: 'ml-2 font-bold' }, 'Default Button'),
            },
        });

        expect(wrapper.html()).toContain('p-button-text');
    });
});
