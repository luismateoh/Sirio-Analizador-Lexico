export default function isOperator(word) {
    let aceptacion = false

    if (/\+/.test(word)) {
        aceptacion = true
    }
    if (/-/.test(word)) {
        aceptacion = true
    }
    if (/\*/.test(word)) {
        aceptacion = true
    }
    if (/\//.test(word)) {
        aceptacion = true
    }
    if (/~\//.test(word)) {
        aceptacion = true
    }
    if (/%/.test(word)) {
        aceptacion = true
    }
    if (/\+\+/.test(word)) {
        aceptacion = true
    }
    if (/--/.test(word)) {
        aceptacion = true
    }
    if (/=/.test(word)) {
        aceptacion = true
    }
    if (/\?\?=/.test(word)) {
        aceptacion = true
    }
    if (/\+=/.test(word)) {
        aceptacion = true
    }
    if (/-=/.test(word)) {
        aceptacion = true
    }
    if (/\*=/.test(word)) {
        aceptacion = true
    }
    if (/\/=/.test(word)) {
        aceptacion = true
    }
    if (/<</.test(word)) {
        aceptacion = true
    }
    if (/>>/.test(word)) {
        aceptacion = true
    }
    if (/&&/.test(word)) {
        aceptacion = true
    }
    if (/\|\|/.test(word)) {
        aceptacion = true
    }
    if (/&/.test(word)) {
        aceptacion = true
    }
    if (/\|/.test(word)) {
        aceptacion = true
    }
    if (/\^/.test(word)) {
        aceptacion = true
    }
    if (/~/.test(word)) {
        aceptacion = true
    }
    if (/\./.test(word)) {
        aceptacion = true
    }

    return aceptacion;

}
