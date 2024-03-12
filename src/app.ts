import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

//console.log(process.env);

// const [tsnode, app, ...args] = process.argv;
// console.log(args);

// console.log(process.argv);
// console.log(yarg.b);

// !  iife:
// (() => {
//     console.log("Berny");
// })();

// (async () => {
//     console.log("Berny con async");
// })();
// * Esto es un patrón común que se usa  cuando se necesita ejecutar código asíncrono desde el root de la aplicación

(async() => {
    await main();
    //console.log('Fin del Programa');
})();

async function main() {
    //console.log("Main ejecutandose");
    // console.log( yarg.base );
    //console.log( yarg );

    const { b: base, l:limit, s:showTable, n: fileName, d: fileDestination } = yarg;    

    ServerApp.run({base, limit, showTable, fileName, fileDestination});
}