export default function isIdentifier(word) {
    let aceptacion
    let regex = /^([a-zA-Z_$][a-zA-Z\\d_$]*)$/
    aceptacion = regex.test(word)
    return aceptacion;
}
