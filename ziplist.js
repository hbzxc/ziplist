const aList = ['a', 'b', 'c'];
const bList = [1, 2, 3];

function zipList(listA, listB) {
  const zList = [];
  let len = 0;
  while (len < listA.length) {
    zList.push(listA[len]);
    zList.push(listB[len]);
    len++;
  }
  return zList;
}

function zipListTheSimpleWay(listA, listB) {
  return _.flatten(_.zip(listA, listB));
}

console.log(zipList(aList, bList));
console.log(zipListTheSimpleWay(aList, bList));
