import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

//console.log(yarg);
// let base = yarg.b;
// let limit = yarg.l;
const {b:base, l:limit, s:showTable} = yarg;

let result: string = `
================================================
|                  TABLA DEL ${base}                 |
================================================
`;

for(let i=1; i<= limit; i++) {
    result += `\n ${base} * ${i} = ${base*i}`;
}
/* 
* Creando el directorio de salida: */
const outputPath = `outputs/folder1/folder2/folder3`;
fs.mkdirSync(outputPath, {recursive: true});

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, result);
console.log("File created");

if(showTable){
    console.log(result);
}

// if(yarg.s){
//     console.log(result);
// }
