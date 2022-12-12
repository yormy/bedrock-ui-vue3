/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import ButtonLink from '../ButtonLink.vue';

describe('ButtonLink.vue', () => {
    it('should render ButtonLink button', () => {
        const wrapper = mount(ButtonLink, {});

        expect(wrapper.html()).toContain('p-button-text');
    });
});
