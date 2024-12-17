function truthCheck(collection, pre) {
  return collection.every(el => el[pre])
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"))

// Все будет правдой
// Проверьте, является ли предикат (второй аргумент) истинным для всех элементов коллекции (первый аргумент).

// Другими словами, вам дан массив коллекции объектов. Предикат preбудет свойством объекта, и вам нужно вернуть, trueесли его значение равно truthy. В противном случае вернуть false.

// В JavaScript truthyзначения — это значения, которые преобразуются trueпри оценке в логическом контексте.

// Помните, что доступ к свойствам объекта можно получить либо с помощью точечной нотации, либо с []помощью нотации .
