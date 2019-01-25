const fs = require('fs');

const colors = require('colors');

// esta es otra forma 
// module.exports.crearArchivo = (base)=>{

let listarTabla = (base, limite) => {
    console.log('================='.green);
    console.log(`tabla de ${base}`.red);
    console.log('================='.green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${i} * ${base} = ${i*base} \n`);
    }
}

let crearArchivo = (base, limite) => {

        return new Promise((resolve, reject) => {
            // evalua si es un numero
            if (!Number(base)) {
                reject('El valor introducido no es un numero ');
                return
            }

            let data = '';

            for (let i = 1; i <= limite; i++) {
                // console.log(i * base);
                data += `${base}*${i}=${base*i} \n `;
            }
            //trbajamnos con lafunciones writeFile que viene con un callback
            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`la tabla-${base}.txt`);
            });
        });
    }
    // module es un archivo del programa y con esta instruccion se exporta "crear archivo" al module
module.exports = {
    crearArchivo,
    listarTabla
}