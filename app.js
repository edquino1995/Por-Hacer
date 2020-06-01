const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    
    case 'listar':
        let lista = porHacer.getListado();
        for (let tarea of lista) {
            console.log('====================='.green);
            console.log(tarea.descripcion);
            console.log('Estado:',tarea.completado);
            console.log('====================='.green);
        }
        break;
        
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.c);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrar_tarea = porHacer.borrar(argv.descripcion);
        console.log(borrar_tarea);
    break;

    default:
        console.log('comando no reconicido');
        break;
}
