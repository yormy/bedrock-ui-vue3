# Props
```javascript

const props = defineProps({

    id: {
        type: String,
        default: '',
    },
});

```

# computed
```javascript

const type = computed(() => {
    if (open.value) {
        return 'is-danger-open';
    }
    return 'is-danger-solid';
})

```

# watcher
```javascript

watch(
    () => checked.value,
    (newValue) => {
        if (newValue) {
            emit('isOn');
            console.log('on');
        }
        if (!newValue) {
            emit('isOff');
            console.log('off');
        }
    }
);

```
# Emits

```javascript

?? validator ?
const emits = defineEmits<{
  (eventName: 'onComplete', code: string): void
  (eventName: 'onEsc'): void
}>();

```

