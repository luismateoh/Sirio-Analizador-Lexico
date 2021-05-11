export default function isSeparator(word) {
    let aceptacion = false
    if
    (/\(/.test(word)) {
        aceptacion = true
    }
    if (/\)/.test(word)) {
        aceptacion = true
    }
    if (/\[/.test(word)) {
        aceptacion = true
    }
    if (/]/.test(word)) {
        aceptacion = true
    }
    if (/\{/.test(word)) {
        aceptacion = true
    }
    if (/}/.test(word)) {
        aceptacion = true
    }
    if (/;/.test(word)) {
        aceptacion = true
    }
    if (/,/.test(word)) {
        aceptacion = true
    }

    return aceptacion;

}
