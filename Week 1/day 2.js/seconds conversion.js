let total_seconds = 50
let seconds = total_seconds % 60
let min = (total_seconds - seconds) / 60
// console.log(min)
// console.log(seconds)
// 200 seconds contains 3 mins and 20 seconds
// console.log(total_seconds, "seconds contains", min, "minute(s) and", seconds, "seconds")
// console.log(total_seconds + " seconds contains " + min + " minute(s) and " + seconds + " seconds")//string concatenation
console.log(`${total_seconds}  seconds contains  ${min}  minute(s) and ${seconds} seconds`)//string interpolation or template literals
