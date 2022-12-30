/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Button from '../ButtonBase.vue';

describe('Button.vue', () => {
    it('is type info working', async () => {
        const wrapper = mount(Button, {
            props: {
                type: 'info',
            },
            slots: {
                default: h('span', { class: '' }, ''),
            },
        });

        expect(wrapper.html()).toContain('p-button-info');
    });
});

describe('Button.vue', () => {
    it('is type warning working', async () => {
        const wrapper = mount(Button, {
            props: {
                type: 'warning',
            },
            slots: {
                default: h('span', { class: '' }, ''),
            },
        });

        expect(wrapper.html()).toContain('p-button-warning');
    });
});

describe('Button.vue', () => {
    it('is type success working', async () => {
        const wrapper = mount(Button, {
            props: {
                type: 'success',
            },
            slots: {
                default: h('span', { class: '' }, ''),
            },
        });

        expect(wrapper.html()).toContain('p-button-success');
    });
});

describe('Button.vue', () => {
    it('is type danger working', async () => {
        const wrapper = mount(Button, {
            props: {
                type: 'danger',
            },
            slots: {
                default: h('span', { class: '' }, ''),
            },
        });

        expect(wrapper.html()).toContain('p-button-danger');
    });
});
