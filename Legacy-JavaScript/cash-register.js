function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let totalCid = cid.reduce((sum, [, amount]) => sum + amount, 0);
  let changeArr = [];

  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    const [unit, amount] = cid[i];
    const unitValue = currencyUnit[unit];
    let unitCount = amount / unitValue;
    let returned = 0;

    while (changeDue >= unitValue && unitCount > 0) {
      changeDue -= unitValue;
      changeDue = Math.round(changeDue * 100) / 100; // Округление до двух знаков после запятой
      unitCount--;
      returned++;
    }

    if (returned > 0) {
      changeArr.push([unit, returned * unitValue]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArr };
}

// Пример использования:
console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
  ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], 
  ["TWENTY", 60], ["ONE HUNDRED", 100]
  ]);
  console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
  ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], 
  ["TWENTY", 60], ["ONE HUNDRED", 100]
  ]))

//   Кассовый аппарат
// Разработайте функцию кассового аппарата checkCashRegister(), которая принимает цену покупки в качестве первого аргумента ( price), платеж в качестве второго аргумента ( cash) и наличные в кассовом аппарате ( cid) в качестве третьего аргумента.

// cidпредставляет собой двумерный массив, содержащий список доступных валют.

// Функция checkCashRegister()всегда должна возвращать объект с statusключом и changeключом.

// Верните деньги {status: "INSUFFICIENT_FUNDS", change: []}, если в кассе меньше суммы сдачи, подлежащей выплате, или если вы не можете вернуть точную сумму сдачи.

// Верните {status: "CLOSED", change: [...]}сумму ключа в кассовом ящике, changeесли она равна сумме сдачи, подлежащей выплате.

// В противном случае верните {status: "OPEN", change: [...]}, с суммой сдачи в монетах и ​​купюрах, отсортированной от наибольшего к наименьшему, в качестве значения ключа change.
