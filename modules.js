// console.log(arguments);

//module.exports (for a single export)
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5));

//exports
const { add, multiply, divide } = require("./test-module-2");
console.log(multiply(2, 5));

//caching
// require("./test-module-3")();
// require("./test-module-3")();
// require("./test-module-3")();