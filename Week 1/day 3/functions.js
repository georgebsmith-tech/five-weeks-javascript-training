function f(x) {
    return 3 * x * x - 1
}

let y = f(1)
y = f(5)
//1 and 5 are called arguments
// console.log(y)

// function g(x, y) {
//     if (x === y) {
//         return true
//     } else {
//         return false
//     }

// }

// function g(x, y) {
//     if (x === y)
//         return true
//     return false
// }
function g(x, y) {
    return x === y
}





console.log(g(4, 6))
console.log(g(6, 6))
console.log(g(6.0, 6))