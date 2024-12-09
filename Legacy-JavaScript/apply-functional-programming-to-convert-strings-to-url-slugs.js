// Only change code below this line
function urlSlug(title) {
return title.split(' ').map(el => el.toLowerCase()).filter(el => el ).join('-')

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
console.log(urlSlug(" Winter Is  Coming"))

// Заполните urlSlugфункцию так, чтобы она преобразовывала строку titleи возвращала версию с дефисами для URL. Вы можете использовать любой из методов, описанных в этом разделе, и не используйте replace. Вот требования:

// Входные данные представляют собой строку с пробелами и словами, начинающимися с заглавной буквы.

// На выходе получается строка, в которой пробелы между словами заменены дефисом ( -).

// Вывод должен состоять только из строчных букв.

// В выводе не должно быть пробелов.
