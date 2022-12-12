/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Button from '../Base.vue';

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

        expect(wrapper.html()).toBe('<button class="p-button p-component p-button-info" type="button"><span class=""></span></button>');
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

        expect(wrapper.html()).toBe('<button class="p-button p-component p-button-warning" type="button"><span class=""></span></button>');
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

        expect(wrapper.html()).toBe('<button class="p-button p-component p-button-success" type="button"><span class=""></span></button>');
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

        expect(wrapper.html()).toBe('<button class="p-button p-component p-button-danger" type="button"><span class=""></span></button>');
    });
});
