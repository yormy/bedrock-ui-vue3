export default function useButtonSizes(type) {
    let classNames = '';

    const mapping = {
        small: 'p-button-sm',
        normal: '',
        large: 'p-button-lg',
    };

    if (mapping[type] === undefined) {
        classNames = '';
    } else {
        classNames = mapping[type];
    }

    return classNames;
}
