/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import ButtonRoot from '../ButtonRoot.vue';

describe('ButtonRoot.vue', () => {
    it('should render ButtonLink button', () => {
        const wrapper = mount(ButtonRoot, {});

        expect(wrapper.html()).toContain('p-button-label');
    });
});
