const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime la tabla de multiplica', opts)
    .command('crear', 'genera un archivo con la tabla de multiplica', opts)
    .help()
    .argv;

module.exports = {
    argv
}