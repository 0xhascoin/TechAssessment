/* 1 */
const getSum = (arr) => {
  let total = 0;
  for(item of arr) {
    total += item;
  }

  return total;
}


/* 2 */

const fruits = [
  { name: "banana", count: 23 },
  { name: "apple", count: 5 },
  { name: "banana", count: 7 },
  { name: "cherry", count: 0 },
  { name: "tomato", count: 52 },
  { name: "tomato", count: 33 },
  { name: "tomato", count: 12 },
];

const getFruitCount = (fruit, fruitsArr=fruits) => {

  let totalCount = 0;
  const items = fruitsArr.filter(item => item.name === fruit);
  if(items.length) {
    for(item of items) {
      totalCount += item.count;
    }
  }
  return totalCount;
}

console.log(getFruitCount("tomato"))

/* 3 */

const fruitsArrayToObject = (fruitsArr=fruits) => {
  let fruitsObj = {};
  
  const allFruits = [...new Set(fruitsArr.map(item => item.name))]; 
  for (fruit of allFruits) {
    let fruitCount = getFruitCount(fruit);
    fruitsObj[fruit] = fruitCount;
  }

  return fruitsObj;
}

let fruitsObj = fruitsArrayToObject()
console.log(fruitsObj)
