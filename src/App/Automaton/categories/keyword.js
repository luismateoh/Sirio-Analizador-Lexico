export default function isKeyword(word) {
    let aceptacion
    let regex = /\b(?:abstract|else|import|super|as|enum|in|switch|assert|export|interface|sync|async|extends|is|this|await|extensioyarn n|library|throw|break|external|mixin|true|case|factory|new|try|catch|false|null|typedef|class|final|on|var|const|finally|operator|void|continue|For|part|while|covarient|Function|rethrow|with|default|get|return|yield|deffered|hide|set|do|if|show|dynamic|implements|static)\b/
    aceptacion = regex.test(word)
    return aceptacion;
}
