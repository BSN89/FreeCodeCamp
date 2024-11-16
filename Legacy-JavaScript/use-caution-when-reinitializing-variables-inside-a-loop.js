function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < n; i++) {
    // Adds the m-th row into newArray
       row.push(0);
          }
    for (let j = 0; j < m; j++) {
      // Pushes n zeroes into the current row to create the columns
      newArray.push(row);
         }
    // Pushes the current row, which now has n zeroes in it, to the array
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
