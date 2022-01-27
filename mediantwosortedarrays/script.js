const array1 = [1,3];
const array2 = [2, 4];

//merge two arrays and sort into order
const finalArray = array1.concat(array2);

function medianArray(finalArray) {
    const concat = finalArray;
    concat - concat.sort(
        function(a, b) {
            return a - b;
        })

    console.log(concat)
    const len = concat.length;

    if (len % 2 === 1) {
        console.log(concat[(len / 2) - .5]);
        return concat[(len / 2) - .5];
    } else {
        console.log((concat[len / 2] + concat[(len / 2) - 1]) / 2);
        return (concat[len / 2] + concat[(len / 2) - 1]) / 2;
    }
}

medianArray(finalArray);