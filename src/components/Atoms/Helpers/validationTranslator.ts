export default function useValidationTranslator(
    attributeName: string,
    translator:any,
    error: { $property: string; $params: object; $validator: string }
    ) {
    const params: any = error.$params;

    if (attributeName !== '') {
        params.attribute = attributeName;
    } else {
        params.attribute = error.$property;
    }

    const rule = error.$validator;

    return translator.t(`validation.${rule}`, params);
}
