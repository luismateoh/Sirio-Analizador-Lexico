export default function isSeparator(word) {
    let acceptation
    const regex = /(?:\[|]|\(|\)|{|}|,|;|:|\.{3})/g
    acceptation = regex.test(word.trim())
    return acceptation;
}
