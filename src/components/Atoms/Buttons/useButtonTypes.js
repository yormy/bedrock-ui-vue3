export default function useButtonTypes(type) {
    let classNames = '';

    const mapping = {
        success: 'p-button-success',
        info: 'p-button-info',
        warning: 'p-button-warning',
        danger: 'p-button-danger',
        help: 'p-button-help',
    };

    if (mapping[type] === undefined) {
        classNames = '';
    } else {
        classNames = mapping[type];
    }

    return classNames;
}
