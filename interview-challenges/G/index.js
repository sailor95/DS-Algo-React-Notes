// Merge Intersection
// [6,1],[1, 3], [2,4], [10,4]  → [1,6], [10,4]  ( [start, length] )

// [6, 7]
// [1, 4]
// [2, 6]
// 1~7

// [10, 14]
// 10~14

// 1~7 10~14
// [1, 6] [10, 4]

const input = [
    [6, 1], [1, 3], [2, 4], [10, 4], [100000, 100000000000000]
]

const merge2 = inputArray => {
    // let output = [];

    const transferredArray = inputArray.map(a => { // N
        return [a[0], a[0] + a[1]];
    });

    transferredArray.sort((a, b) => { // NlogN
        return a[0] - b[0];
    });

    //console.log(transferredArray);

    // sortedArray[i][0] < sortedArray[i - 1][1] ?
    // true:
    // [sotedArray[i - 1][0], sortedArray[i][1] - sotedArray[i - 1][0]]
    // false: 
    // output.push([sotedArray[i][0], sortedArray[i][1] - [sotedArray[i][0]])

    return transferredArray.reduce((sum, curr, i, arr) => { // N
        if (i > 0 && arr[i][0] <= sum[sum.length - 1][1]) {
            sum[sum.length - 1][1] = arr[i][1];
            return sum;
        } else {
            sum.push([arr[i][0], arr[i][1]]);
            return sum;
        }
    }, []).map(tArr => { // N
        return [tArr[0], tArr[1] - tArr[0]];
    });
}

console.log(merge2(input));

const merge = inputArray => {
    // let output = [];

    const set = new Set();

    const transferedArray = inputArray.map(a => { // N
        return [a[0], a[0] + a[1]];
    });

    transferedArray.forEach(a => {                 // N*M
        for (let i = a[0]; i <= a[1]; i++) {
            set.add(i);
        }
    });

    const sortedArray = [...(set)].sort((a, b) => a - b); //NlogN

    // console.log(sortedArray);

    // let outputLength = 0;

    // [[1, 5] [10, 4]]
    //   
    //   []
    //   
    const output = sortedArray.reduce((sum, a, i, arr) => { //N
        if (i > 0 && (a - arr[i - 1]) === 1) {
            console.log('sum', sum);
            sum[sum.length - 1][1]++;
            return sum;
        } else {
            sum.push([a, 0]);
            return sum;
        }
    }, []);

    return output;
}