function translatePigLatin(str) {
  if (/^[aeiou]/i.test(str)) {
    return str + "way";
  }
  const vowelIndex = str.search(/[aeiou]/i);
  if (vowelIndex === -1) {
    return str + "ay";
  }
  return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
 
}

translatePigLatin("consonant")
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm") );
console.log(translatePigLatin("glove"));

// Свиная латынь — это способ изменения английских слов. Правила следующие:

// - Если слово начинается с согласной, возьмите первую согласную или группу согласных, переместите ее в конец слова и добавьте ayк ней.

// - Если слово начинается с гласной, просто добавьте ее wayв конце.

// Переводим предоставленную строку на Pig Latin. Входные строки гарантированно являются английскими словами в нижнем регис