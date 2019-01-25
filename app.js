// Una forma de importar una archivo de NODE
// en este casi es el filesystem para crear archivos de texto con contenido

// const fs = require('fs');

// const fs = require('express');
//Archivos que nosostros mismos escribimos y que debe estar en algun lado de nuestro proyecto
// const fs = require('./fs');

//let base = 6;
// let data = '';


// for (let i = 1; i <= 10; i++) {
//     // console.log(i * base);
//     data += `${base}*${i}=${base*i} \n `;
// }
// //trbajamnos con lafunciones writeFile que viene con un callback
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('El archivo ha sido creado');
// }); 
//_______________________________________________________________//
// yargs para solucionar los problemas de enviar argumentos desde la consola 
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
// para obtener lo que esta en la posicion 1 del los argv del process
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        break;
}