const fs =  require("fs");
require("colors");

const Multiplicar = async (base = 0, listar, hasta) => {
  let contenido = "";
  let consola = "";

  for (let i =1; i <=hasta ; i++){
    contenido += `${base} ${"X"} ${i} ${"="} ${base*i}\n`;

    consola += `${base} ${"X".green} ${i} ${"=".green} ${base*i}\n`;
  }

  if (listar) {
    console.log("==================".blue);
    console.log(`   Tabla del ${base}`);

    console.log("==================".blue);

    console.log(consola);
  };

  if (base){
    fs.writeFile (`./Datos/Tabla del ${base}.txt`, contenido, (err) => {
      if (err){ 
        throw err;
      };
    });
  }

  return (`Tabla del ${base}.txt`)
};

module.exports = Multiplicar;