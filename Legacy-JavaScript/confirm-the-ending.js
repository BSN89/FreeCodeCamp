function confirmEnding(str, target) {
  let targetLength = target.length
  let subsStr = str.slice(-targetLength)
  return subsStr === target
}

confirmEnding("Bastian", "n");

// Подтвердите окончание
// Проверьте, заканчивается ли строка (первый аргумент, str) заданной целевой строкой (второй аргумент, target).

// Эту задачу можно решить с помощью .endsWith()метода, который был представлен в ES2015. Но для целей этой задачи мы хотели бы, чтобы вы использовали один из методов подстроки JavaScript.