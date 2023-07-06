const argv = require ("yargs")
  .option("b", {
    alias: "base",
    describe: "La base de la multiplicación",
    type: "number",
    demandOption: true,
  }).option("l", {
    alias: "listar",
    describe: "Mostramos los datos en consola",
    type: "boolean",
    default: false
  }).option("h", {
    alias: "hasta",
    describe: "Hasta donde llegara la tabla",
    type: "number",
    default: 10
  })


  .check((arv, opt) => {
    if (isNaN(arv.b) && isNaN(arv.h)) {
      throw "Comprueba: La base y el 'hasta' deben ser numericos"
    } return true;
  })
  .argv;


module.exports = argv;