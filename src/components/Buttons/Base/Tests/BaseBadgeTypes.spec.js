/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Button from '../Base.vue';

describe('Button.vue', () => {
    it('is badgeType info working', async () => {
        const wrapper = mount(Button, {
            props: {
                badge: '99',
                "badge-type" : 'info',
            },
        });

        expect(wrapper.html()).toContain(
            '<span class="p-badge p-component p-badge-info">99</span>'
        );
    });
});

describe('Button.vue', () => {
    it('is badgeType success working', async () => {
        const wrapper = mount(Button, {
            props: {
                badge: '99',
                "badge-type" : 'success',
            },
        });

        expect(wrapper.html()).toContain(
            '<span class="p-badge p-component p-badge-success">99</span>'
        );
    });
});

describe('Button.vue', () => {
    it('is badgeType warning working', async () => {
        const wrapper = mount(Button, {
            props: {
                badge: '99',
                "badge-type" : 'warning',
            },
        });

        expect(wrapper.html()).toContain(
            '<span class="p-badge p-component p-badge-warning">99</span>'
        );
    });
});

describe('Button.vue', () => {
    it('is badgeType danger working', async () => {
        const wrapper = mount(Button, {
            props: {
                badge: '99',
                "badge-type" : 'danger',
            },
        });

        expect(wrapper.html()).toContain(
            '<span class="p-badge p-component p-badge-danger">99</span>'
        );
    });
});
