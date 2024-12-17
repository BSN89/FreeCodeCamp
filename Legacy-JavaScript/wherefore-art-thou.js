function whatIsInAName(collection, source) {
let sourceKeys = Object.keys(source)
return collection.filter(obj => {
  return sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key] )
})

}

whatIsInAName([
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })

  console.log(whatIsInAName([
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))

  console.log(whatIsInAName([
    { "apple": 1, "bat": 2 }, 
    { "bat": 2 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
     console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}))

    //  Например, если первый аргумент — [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], а второй аргумент — { last: "Capulet" }, то необходимо вернуть третий объект из массива (первый аргумент), поскольку он содержит имя и его значение, которое было передано в качестве второго аргумента.