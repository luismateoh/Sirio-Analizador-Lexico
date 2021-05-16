export default function isIdentifier(word) {
    let acceptation
    const regex = /^[a-zA-Z_$][a-zA-Z\d_$]*$/gm
    acceptation = regex.test(word.trim())
    return acceptation;
}
