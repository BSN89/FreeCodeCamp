let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

// Вы можете указать нижнее и верхнее количество шаблонов с помощью спецификаторов количества, используя фигурные скобки. Иногда вам нужно только определенное количество совпадений.

// Чтобы указать определенное количество шаблонов, просто укажите это число в фигурных скобках.

// Например, чтобы найти только слово hahс буквой a 3times, ваше регулярное выражение будет выглядеть так /ha{3}h/: .

// let A4 = "haaaah";
// let A3 = "haaah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleHA = /ha{3}h/;
// multipleHA.test(A4);
// multipleHA.test(A3);
// multipleHA.test(A100);
// По порядку три testвызова вернут false, true, и false.

// Измените регулярное выражение timRegexтак, чтобы оно соответствовало слову, Timberтолько если оно состоит из четырех букв m.