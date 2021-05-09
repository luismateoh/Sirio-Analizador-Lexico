export default function findConstNum(number) {
    let estado = 0
    let aceptacion = 0
    let word = number.split("");
    word.forEach(automaton);

    function automaton(value, index, array) {
        let symbolo;
        switch (value) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                symbolo = "d"
                break;
            case ".":
                symbolo = "."
                break;
            case "E":
                symbolo = "E"
                break;
            case "+":
            case "-":
                symbolo = "s"
                break;
            default:
                symbolo = "x"
                estado = 9
                aceptacion = 0
        }

        switch (estado) {
            case 0:
                switch (symbolo) {
                    case "d":
                        estado = 2
                        aceptacion = 1
                        break;
                    case ".":
                        estado = 8
                        aceptacion = 0
                        break;
                    case "E":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "s":
                        estado = 1
                        aceptacion = 0
                        break;
                    default:
                }

                break;
            case 1:
                switch (symbolo) {
                    case "d":
                        estado = 2
                        aceptacion = 1
                        break;
                    case ".":
                        estado = 8
                        aceptacion = 0
                        break;
                    case "E":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "s":
                        estado = 9
                        aceptacion = 0
                        break;
                    default:
                }

                break;
            case 2:
                switch (symbolo) {
                    case "d":
                        estado = 2
                        aceptacion = 1
                        break;
                    case ".":
                        estado = 34
                        aceptacion = 1
                        break;
                    case "E":
                        estado = 5
                        aceptacion = 0
                        break;
                    case "s":
                        estado = 9
                        aceptacion = 0
                        break;
                    default:
                }
                break;
            case 34:
                switch (symbolo) {
                    case "d":
                        estado = 34
                        aceptacion = 1
                        break;
                    case ".":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "E":
                        estado = 5
                        aceptacion = 0
                        break;
                    case "s":
                        estado = 9
                        aceptacion = 0
                        break;
                    default:
                }
                break;
            case 5:
                switch (symbolo) {
                    case "d":
                        estado = 7
                        aceptacion = 1
                        break;
                    case ".":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "E":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "s":
                        estado = 6
                        aceptacion = 0
                        break;
                    default:
                }
                break;
            case 6:
                switch (symbolo) {
                    case "d":
                        estado = 7
                        aceptacion = 1
                        break;
                    case ".":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "E":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "s":
                        estado = 9
                        aceptacion = 0
                        break;
                    default:
                }
                break;
            case 7:
                switch (symbolo) {
                    case "d":
                        estado = 7
                        aceptacion = 1
                        break;
                    case ".":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "E":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "s":
                        estado = 9
                        aceptacion = 0
                        break;
                    default:
                }
                break;
            case 8:
                switch (symbolo) {
                    case "d":
                        estado = 34
                        aceptacion = 1
                        break;
                    case ".":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "E":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "s":
                        estado = 9
                        aceptacion = 0
                        break;
                    default:
                }

                break;
            case 9:
                switch (symbolo) {
                    case "d":
                        estado = 9
                        aceptacion = 0
                        break;
                    case ".":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "E":
                        estado = 9
                        aceptacion = 0
                        break;
                    case "s":
                        estado = 9
                        aceptacion = 0
                        break;
                    default:
                }
                break;
            default:
        }
    }

    return aceptacion;
}


