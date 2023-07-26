const Fibonacci_iter = n => {
    const arr = [1, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

// return array
const Fibonacci_recur_arr = (n, arr = [1, 1]) => {
    if (arr.length < n) {
        const len = arr.length;
        return Fibonacci_recur_arr(n, [...arr, arr[len - 1] + arr[len - 2]]);
    } else {
        return arr;
    }
}

console.log(Fibonacci_recur_arr(8));

// return number
const Fibonacci_recur = n => {
    if (n < 2) return 1;
    return Fibonacci_recur(n - 1) + Fibonacci_recur(n - 2);
}

const Fibonacci_recur_memo = (n, memo) => {
    memo = memo || {};

    if (memo[n]) return memo[n];
    if (n < 2) return 1;

    return memo[n] =
        Fibonacci_recur_memo(n - 1, memo) + Fibonacci_recur_memo(n - 2, memo);
}

// console.log(Fibonacci_recur_memo(8));