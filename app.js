const argv = require("./yargs/yargs.js");
const Multiplicar = require("./helpers/multiplicacion.js");
require("colors");


console.clear();
console.log(argv.h);


Multiplicar(argv.b, argv.l, argv.h)
  .then(ar => console.log(ar.green, "creada".green))
  .catch(e => console.log(e.red));
