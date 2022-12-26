import {computed} from "vue";

export default function useIdentifier(id) {

    const identifier = computed(() => {
        if (id) {
            return id;
        }

        if (name) {
            return name;
        }

        return Math.random();
    });

    return [identifier];
}
