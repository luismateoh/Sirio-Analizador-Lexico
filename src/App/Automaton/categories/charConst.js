export default function isCharConst(word) {
    let acceptation
    const regex = /(["'])((?:(?=(?:\\)*)\\.|.)*?)\1/gm
    acceptation = regex.test(word.trim())
    return acceptation;
}
