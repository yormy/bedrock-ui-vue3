export function useButtonTypes(type) {
    let classNames = '';

    const mapping = {
        'success'   : 'p-button-success',
        'info'      : 'p-button-info',
        'warning'   : 'p-button-warning',
        'danger'    : 'p-button-danger',
    };

    if (mapping[type] === undefined) {
        classNames = 'p-button-info'
    } else {
        classNames = mapping[type];
    }

    return classNames;
}
