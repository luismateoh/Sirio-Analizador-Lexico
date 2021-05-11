export default function isCharConst(word) {
    let aceptacion
    let regex = /(^"[\w\s]+"$)|(^'[\w\s]+'$)/
    aceptacion = regex.test(word)
    return aceptacion;
}
