const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')
const colors = require('colors');
const argv = require('./config/yargs').argv;


let argv2 = process.argv;
let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:

        break;
}