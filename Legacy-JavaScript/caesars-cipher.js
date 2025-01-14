function rot13(str) {
    let decoded = ""

    for (let i = 0; i < str.length; i++) {
      
        let char = str[i]

        if (char >= 'A' && char <= 'Z') {
            let code = char.charCodeAt(0)
            let shiftedCode = ((code - 65 + 13) % 26) + 65
            decoded += String.fromCharCode(shiftedCode)
        } else {
            decoded += char
        }
    }

    return decoded
}

rot13("SERR PBQR PNZC")

// Шифр Цезаря
// Одним из самых простых и широко известных шифров является шифр Цезаря , также известный как сдвиговый шифр . В сдвиговом шифре значения букв сдвигаются на некоторую заданную величину.

// Распространенным современным применением является шифр ROT13 , в котором значения букв смещены на 13 позиций. Таким образом A ↔ N, B ↔ Oи так далее.

// Напишите функцию, которая принимает в качестве входных данных строку, закодированную в формате ROT13 , и возвращает декодированную строку.

// Все буквы будут заглавными. Не преобразуйте никакие неалфавитные символы (т. е. пробелы, знаки препинания), но передавайте их дальше.