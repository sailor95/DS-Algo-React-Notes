# Recursion

A process that calls itself

## Keys Mistakes

- No base case
- Forget to return/wrong thing
- Stack overflow

## Helper Method Recursion

```javascript

function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] %2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

```

## Pure Recursion

```javascript

function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));

    return newArr;
}

collectOddValues([1,2,3,4,5]);

```
