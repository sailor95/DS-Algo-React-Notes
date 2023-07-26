// Q1: To currency
// Example: "99900000.5566" -> "99,900,000.5566"

const toCurrency_1 = input => {
    const [intNum = '0', fractionNum = '0000'] = input.toString().split('.');

    let intCurrency = [];
    intNum.split('').reverse().forEach((val, i) => {
        if ((i + 1) % 3 !== 0) {
            intCurrency.push(val);
        } else {
            if ((i + 1) !== intNum.length) {
                intCurrency.push(val);
                intCurrency.push(',');
            } else {
                intCurrency.push(val);
            }
        }
    });

    return intCurrency.reverse().join('') + '.' + fractionNum;
}

const toCurrency_2 = input => input.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,');

// console.log(toCurrency_1(999000.5566));
// console.log(toCurrency_1(99900066));
// console.log(toCurrency_2(999000.5566));
// console.log(toCurrency_2(99900066));


// Q2: Anagram, check two strings can compose each other by all the char. (Ignore white space.)
// Example: anagram('Hello', 'Oll Eh') === true

const anagram = (s1, s2) =>
    s1.toLowerCase().split('').sort().join('').trim() === s2.toLowerCase().split('').sort().join('').trim();

// console.log(`Ana: ${anagram('Hel ttlo', 'Otll EhT')}`);

// Q3:



// Q4: Please complete the function to make the following two console log print true.

const getUrl = (url, param) => {

}

// console.log(
//     getUrl("/api/v1/user/{id}/profile", {
//         id: 123,
//         nickName: "Lee Chen",
//         description: "Hello world @.@"
//     }) === "/api/v1/user/123/profile?nickName=Lee+Chen&description=HelloWorld!%20%40.%40"
// );
// console.log(
//     getUrl("/api/v1/server/{port}/{protocol}", {
//         port: 80,
//         protocol: "TCP"
//     }) === "/api/v1/server/80/TCP"
// );

// Q5:

// About Promise

// Q6: add(1)(2)(3) = 6, add(1,2)(3) = 6, add(1,2,3) = 6

const add_1 = x => {
    return innerAdd = y => {
        if (y) {
            x = y + x;
            return innerAdd;
        } else {
            return x;
        }
    }
}

const add_2 = x => {
    let f = y => add_2(x + y);
    f.valueOf = () => { return x };
    return f;
}

const sum = a => b => b ? sum(a + b) : a;

const add_3 = (...args) => {
    let sum = 0;
    if (args.length) {
        args.forEach(arg => sum += arg);
        return innerAdd = (...args) => {
            if (args.length) {
                args.forEach(arg => sum += arg);
                return innerAdd;
            } else {
                return sum;
            }
        }
    }
    return sum;
}

const add_4 = (...args) => {
    let sum = 0;
    if (args.length) {

        args.forEach(arg => sum += arg);

        const summer = (...args) => {
            args.forEach(arg => sum += arg);
            return summer;
        }

        summer.toString = () => {
            return sum;
        }

        return summer;
    }
    return sum;
}

// const add = () => {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }

//     if (arguments) {
//         return result = () => {
//             for (let i = 0; i < arguments.length; i++) {
//                 sum += arguments[i];
//             }
//             return result();
//         }
//     } else {
//         return sum;
//     }
// }


function sum3(...args) {
    function curriedSum(...rest) {
        args.push(...rest);
        return curriedSum;
    }
    curriedSum.toString = () => args.reduce((prev, curr) => curr + prev);

    curriedSum.toNumber = () => args.reduce((prev, curr) => curr + prev);
    return curriedSum;
}

function sum2() {
    var args = arguments
    return function () {
        var arr = []
        arr.push(...args, ...arguments)
        return arr.reduce((total, item) => total += item, 0)
    }
}

console.log(sum3(1)(2));