const insertionSort = (list) => {
    const n = list.length;
    for (let i = 0; i < n; i++) {
        const element = list[i];
        let j = i - 1;
        while (j >= 0 && list[j] > element) {
            list[j + 1] = list[j];
            j = j - 1;
        }

        list[j + 1] = element;
    }

    return list;
}

const collection = [3, 1, 5, 2, 6];
console.log("Before Insertion Sorting: ", collection.toString());

const result = insertionSort(collection);
console.log("After Insertion Sorting: ", result.toString());