let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

// Вы можете указать нижнее и верхнее количество шаблонов с помощью спецификаторов количества, используя фигурные скобки. Иногда вы хотите указать только нижнее количество шаблонов без верхнего предела.

// Чтобы указать только меньшее количество шаблонов, оставьте первое число, поставив запятую.

// Например, чтобы найти только строку hah, в которой буква aвстречается не менее 3одного раза, регулярное выражение будет выглядеть так /ha{3,}h/: .

// let A4 = "haaaah";
// let A2 = "haah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleA = /ha{3,}h/;
// multipleA.test(A4);
// multipleA.test(A2);
// multipleA.test(A100);
// По порядку три testвызова вернут true, false, и true.

// Измените регулярное выражение haRegexтак, чтобы оно соответствовало слову, Hazzahтолько если оно состоит из четырех или более букв z.