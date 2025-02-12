export const stringFormater = (template, values) => {
    if (typeof template !== 'string') {
        throw new TypeError('El primer argumento debe ser un string.');
    }
    if (!Array.isArray(values)) {
        throw new TypeError('El segundo argumento debe ser un array.');
    }

    return template.replace(/\{(\d+)\}/g, (match, index) => {
        if (values[index] !== undefined) {
            return values[index];
        }
        throw new Error(`No hay un valor disponible para el marcador de posición {${index}}.`);
    });
}

export const reverseString = (str) => {
    if (typeof str !== 'string') throw new TypeError('El argumento debe ser un string.');
    return str.split('').reverse().join('');
}

export const truncate = (str, maxLength, suffix = "...") => {
    if (typeof str !== 'string') throw new TypeError('El primer argumento debe ser un string.');
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - suffix.length) + suffix;
}