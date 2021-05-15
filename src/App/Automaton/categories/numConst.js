export default function isNumConst(word) {
    let estate = 0
    let acceptation
    word = word.split("");
    word.forEach(automaton);

    function automaton(value, index, array) {
        let symbol;
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
                symbol = "d"
                break;
            case ".":
                symbol = "."
                break;
            case"e":
            case "E":
                symbol = "E"
                break;
            case "-":
                symbol = "s"
                break;
            default:
                symbol = "x"
                estate = 9
                acceptation = false
        }

        switch (estate) {
            case 0:
                switch (symbol) {
                    case "d":
                        estate = 2
                        acceptation = true
                        break;
                    case ".":
                        estate = 8
                        acceptation = false
                        break;
                    case "E":
                        estate = 9
                        acceptation = false
                        break;
                    case "s":
                        estate = 1
                        acceptation = false
                        break;
                    default:
                }

                break;
            case 1:
                switch (symbol) {
                    case "d":
                        estate = 2
                        acceptation = true
                        break;
                    case ".":
                        estate = 8
                        acceptation = false
                        break;
                    case "E":
                        estate = 9
                        acceptation = false
                        break;
                    case "s":
                        estate = 9
                        acceptation = false
                        break;
                    default:
                }

                break;
            case 2:
                switch (symbol) {
                    case "d":
                        estate = 2
                        acceptation = true
                        break;
                    case ".":
                        estate = 34
                        acceptation = true
                        break;
                    case "E":
                        estate = 5
                        acceptation = false
                        break;
                    case "s":
                        estate = 9
                        acceptation = false
                        break;
                    default:
                }
                break;
            case 34:
                switch (symbol) {
                    case "d":
                        estate = 34
                        acceptation = true
                        break;
                    case ".":
                        estate = 9
                        acceptation = false
                        break;
                    case "E":
                        estate = 5
                        acceptation = false
                        break;
                    case "s":
                        estate = 9
                        acceptation = false
                        break;
                    default:
                }
                break;
            case 5:
                switch (symbol) {
                    case "d":
                        estate = 7
                        acceptation = true
                        break;
                    case ".":
                        estate = 9
                        acceptation = false
                        break;
                    case "E":
                        estate = 9
                        acceptation = false
                        break;
                    case "s":
                        estate = 6
                        acceptation = false
                        break;
                    default:
                }
                break;
            case 6:
                switch (symbol) {
                    case "d":
                        estate = 7
                        acceptation = true
                        break;
                    case ".":
                        estate = 9
                        acceptation = false
                        break;
                    case "E":
                        estate = 9
                        acceptation = false
                        break;
                    case "s":
                        estate = 9
                        acceptation = false
                        break;
                    default:
                }
                break;
            case 7:
                switch (symbol) {
                    case "d":
                        estate = 7
                        acceptation = true
                        break;
                    case ".":
                        estate = 9
                        acceptation = false
                        break;
                    case "E":
                        estate = 9
                        acceptation = false
                        break;
                    case "s":
                        estate = 9
                        acceptation = false
                        break;
                    default:
                }
                break;
            case 8:
                switch (symbol) {
                    case "d":
                        estate = 34
                        acceptation = true
                        break;
                    case ".":
                        estate = 9
                        acceptation = false
                        break;
                    case "E":
                        estate = 9
                        acceptation = false
                        break;
                    case "s":
                        estate = 9
                        acceptation = false
                        break;
                    default:
                }

                break;
            case 9:
                switch (symbol) {
                    case "d":
                        estate = 9
                        acceptation = false
                        break;
                    case ".":
                        estate = 9
                        acceptation = false
                        break;
                    case "E":
                        estate = 9
                        acceptation = false
                        break;
                    case "s":
                        estate = 9
                        acceptation = false
                        break;
                    default:
                }
                break;
            default:
        }
    }

    return acceptation;
}
