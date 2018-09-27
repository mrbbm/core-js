const bubbleSort = (list) => {
    const n = list.length;
    for (let i = 0; i < (n - 1); i++) {
        for (let j = 0; j < (n - i - 1); j++) {
            ++counter;
            if (list[j] > list[j + 1]) {
                const temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list;
}

const collection = [3, 1, 5, 2, 6];
const result = bubbleSort(collection);

console.log("Before Sorting: ", collection.toString());
console.log("After Sorting: ", result.toString());
