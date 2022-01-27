const array1 = [1, 2, 5, 6];
const array2 = [3, 7, 8, 13];

//merge two arrays and sort into order
const finalArray = array1.concat(array2);
finalArray.sort();

console.log(finalArray);
let count = 0;

for (let i = 0; i < finalArray.length; i++) {
    count +=finalArray[i];
}
console.log(count/2)