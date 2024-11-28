// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// Приготовьте 27 чашек зеленого чая и 13 чашек черного чая и сохраните их в переменных tea4GreenTeamFCCи соответственно. Обратите внимание, что функция была изменена, и теперь она принимает функцию в качестве первого аргумента.tea4BlackTeamFCCgetTea

// Примечание: Данные (количество чашек чая) поставляются в качестве последнего аргумента. Мы обсудим это подробнее в последующих уроках.