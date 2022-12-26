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
    return ...
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


# Wrapper include json:
    // :menuButtonProps= "{icon: 'y-icon icon icon-users'}"
