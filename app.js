const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');

const argv = require('./config/yars');

console.clear();

// const [ , , argv3='base=5'] = process.argv
// const [ , base] = argv3.split('=');

// console.log(argv)
// console.log('la base de yargs es:', argv.b)
// const base = 6;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.green))
    .catch(err=> console.log(err))