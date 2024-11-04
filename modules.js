// console.log(arguments);

//module.exports (for a single export)
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5));

//exports
