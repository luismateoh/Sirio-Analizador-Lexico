/* eslint-disable no-useless-escape */
import isCharConst from "./categories/charConst";
import isIdentifier from "./categories/identify";
import isKeyword from "./categories/keyword";
import isNumConst from "./categories/numConst";
import isOperator from "./categories/operator";
import isSeparator from "./categories/separator";

export default function automaton2(text) {

    let textArray = text.split(/(?:(["'])((?:(?=(?:\\)*)\\.|.)*?)\1)/gm)
    let textArrayCharConst = []
    for (let i = 0; i < textArray.length; i) {
        let value = textArray[i]
        if (0 === value.localeCompare("\"")) {
            value = "\"".concat(textArray[i + 1], "\"")
            i++
        } else if (0 === value.localeCompare("\'")) {
            value = "\'".concat(textArray[i + 1], "\'")
            i++
        }
        textArrayCharConst.push(value)
        i++
    }

    textArrayCharConst.forEach(function (value, index) {
            let expr = textArrayCharConst[index];
            if (!isCharConst(value)) {
                //Se eliminan saltos de linea y tabulaciones
                expr = expr.replaceAll(/\n/g, " ")
                expr = expr.replaceAll(/\t/g, " ")

                //Se aislan primero los signos que pueden generar cadenas de texto añadiendoles espacios.
                expr = expr.replaceAll(/"/g, ' " ')
                expr = expr.replaceAll(/'/g, " ' ")

                //se aislan los delimitadores o separadores
                const separatorsList = ["\(", "\)", "\[", "\]", "\{", "\}", ";", ",", ":"]
                separatorsList.forEach(function (value) {
                    let regex = new RegExp("\\".concat(value), "g")
                    expr = expr.replaceAll(regex, " ".concat(value, " "))
                })

                //Se aislan los operadores + - * / % < > = ! & | ^ ~  ?
                const operatorsList = ["\+", "-", "\*", "\/", "%", "<", ">", "=", "!", "&", "\|", "\^", "~", "\?", "\."]
                operatorsList.forEach(function (value) {
                    let regex = new RegExp("\\".concat(value), "g")
                    expr = expr.replaceAll(regex, " ".concat(value, " "))
                })

                //Se reagrupa el "." si esta entre numeros
                expr = expr.replaceAll(/(?<=\d)( \. )(?=\d)/g, ".")

                //Se reagrupan los operadores compuestos triples
                const tripleOperatorsList = ["\<\<\=", "\>\>\=", "\~\/\=]","..."]
                tripleOperatorsList.forEach(function (value) {
                    let regex = new RegExp("\\".concat(value.charAt(0), "\\s\\s", "\\", value.charAt(1), "\\s\\s", "\\", value.charAt(2)), "g")
                    expr = expr.replaceAll(regex, " ".concat(value.charAt(0), value.charAt(1), value.charAt(2), " "))
                })

                //Se reagrupan los operadores compuestos dobles
                const dobleOperatorsList = ["\+\+", "–\=", "\/\=", "\%\=", "\^\=", "\+\=", "\*\=", "\&\=", "\|\=",
                    "\|\|", "\&\&", "\+\+", "\-\-", "\<\<", "\>\>", "\=\=", "\!\=", "\>\=", "\<\=", "\~\/", "\?\?", "\?\."]
                dobleOperatorsList.forEach(function (value) {
                    let regex = new RegExp("\\".concat(value.charAt(0), "\\s\\s", "\\", value.charAt(1)), "g")
                    expr = expr.replaceAll(regex, " ".concat(value.charAt(0), value.charAt(1), " "))
                })
            }
            textArrayCharConst[index] = expr;
        }
    )
    text = textArrayCharConst.join(" ");
    //Se eliminan espacios dobles
    text = text.trim();
    text = text.replaceAll(/\s{2,}/g, " ");

    //Se separa el texto por espacios simples
    text = text.match(/[^\s"']+|(?:(["'])((?:(?=(?:\\)*)\\.|.)*?)\1)/g);

    //Se tokeniza cada elemento de la lista text y se guarda en un array de tokens.
    let listaTokens = [];
    text.forEach(tokenizar);

    function tokenizar(value, index, array) {
        let key = "No encontrado"

        if (isSeparator(value)) {
            key = "Separador"
        }
        if (isOperator(value)) {
            key = "Operador"
        }
        if (isNumConst(value)) {
            key = "Constante Numerica"
        }
        if (isIdentifier(value)) {
            key = "Identificador"
        }
        if (isKeyword(value)) {
            key = "Palabra reservada"
        }
        if (isCharConst(value)) {
            key = "Cadena de texto"
        }

        listaTokens.push({key: key, value: value})
    }

    return listaTokens
}

