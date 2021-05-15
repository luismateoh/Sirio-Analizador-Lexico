export default function isOperator(word) {
    let acceptation
    const regex = /(?:<<=|>>=|~\/=|–=|\/=|%=|\^=|\+=|\*=|&=|\|=|\|\||&&|\+\+|--|<<|>>|==|!=|>=|<=|\?\?|\?\.|~\/|!|&|\||\^|=|>|<|\+|–|\*|\/|%|~|\?|\.)/g
    acceptation = regex.test(word.trim())
    return acceptation;
}
