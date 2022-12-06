export function useBadgeTypes(type) {
    let classNames = '';

    const mapping = {
        'success'   : 'p-badge-success',
        'info'      : 'p-badge-info',
        'warning'   : 'p-badge-warning',
        'danger'    : 'p-badge-danger',
    };

    if (mapping[type] === undefined) {
        classNames = 'p-button-info'
    } else {
        classNames = mapping[type];
    }

    return classNames;
}
