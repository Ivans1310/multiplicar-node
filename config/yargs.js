const opt = {

    base: {
        // demand= es obligatorio este argumento
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        // valor por defecto si no se envia
        default: 10
    }

}

const argv = require('yargs')
    // comando que se va a configurar en este caso se le configura al comando 'listar'
    // los argumentos base y limite
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('listar', 'Crea un archivo de la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
};