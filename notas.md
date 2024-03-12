# Sección 6: Aplicación de consola - Clean Architecture - Primeros Pasos

* Pasos:
[Node con TypeScript - Recomendado](https://gist.github.com/Klerith/47af527da090043f604b972b22dd4c01)

1. Instalar TypeScript y demás dependencias
```
npm i -D typescript @types/node ts-node nodemon rimraf
```
2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
```
npx tsc --init --outDir dist/ --rootDir src
```
3. Crear archivo de configuración Nodemon - nodemon.json
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```
4. Crear scripts para dev, build y start
```
 "dev": "nodemon",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```

![](./img/Screenshot_1.jpg)
![](./img/Screenshot_2.jpg)
![](./img/Screenshot_3.jpg)
![](./img/Screenshot_4.jpg)
![](./img/Screenshot_5.jpg)

## Tarea - Impresión de consola y archivo

* Ejercicio con fs - filesystem
![](./img/Screenshot_6.jpg)
![](./img/Screenshot_7.jpg)

* Creando el directorio de salida:
![](./img/Screenshot_8.jpg)

##  Argv - Argument Values
![](./img/Screenshot_9.jpg)
![](./img/Screenshot_10.jpg)
*Banderas
![](./img/Screenshot_11.jpg)
![](./img/Screenshot_12.jpg)
![](./img/Screenshot_13.jpg)
![](./img/Screenshot_14.jpg)

## yargs
[npm yargs](https://www.npmjs.com/package/yargs)
[web oficial yargs](https://yargs.js.org/)

* Instalando:
![](./img/Screenshot_15.jpg)
* Opciones:
![](./img/Screenshot_16.jpg)
![](./img/Screenshot_17.jpg)
![](./img/Screenshot_18.jpg)
![](./img/Screenshot_19.jpg)

* Uso en el proyecto:
![](./img/Screenshot_20.jpg)
![](./img/Screenshot_21.jpg)


## Función anónima auto-invocada
![](./img/Screenshot_22.jpg)
![](./img/Screenshot_23.jpg)

## Opciones de Yargs
![](./img/Screenshot_24.jpg)
![](./img/Screenshot_25.jpg)
![](./img/Screenshot_26.jpg)
![](./img/Screenshot_27.jpg)
![](./img/Screenshot_28.jpg)
![](./img/Screenshot_29.jpg)
![](./img/Screenshot_30.jpg)
![](./img/Screenshot_31.jpg)
![](./img/Screenshot_32.jpg)

## Checks - Validaciones adicionales
![](./img/Screenshot_33.jpg)
![](./img/Screenshot_34.jpg)
![](./img/Screenshot_35.jpg)

## Usando Yargs empiricamente
![](./img/Screenshot_36.jpg)
![](./img/Screenshot_37.jpg)

## Refactorizar - Organizar lógicamente el código
* Buenas prácticas 
![](./img/Screenshot_38.jpg)
![](./img/Screenshot_39.jpg)
![](./img/Screenshot_40.jpg)
![](./img/Screenshot_41.jpg)
![](./img/Screenshot_42.jpg)
![](./img/Screenshot_43.jpg)
![](./img/Screenshot_44.jpg)

## Clean Architecture - Use Cases
![](./img/Screenshot_45.jpg)
![](./img/Screenshot_46.jpg)


## CreateTable - UseCase
* La idea del directorio "domain" es que allí se tendrán las reglas que van a regir a otras capas exteriores
![](./img/Screenshot_47.jpg)
![](./img/Screenshot_49.jpg)
![](./img/Screenshot_48.jpg)

## SaveFile - UseCase
![](./img/Screenshot_50.jpg)
![](./img/Screenshot_51.jpg)
![](./img/Screenshot_52.jpg)
![](./img/Screenshot_53.jpg)
![](./img/Screenshot_54.jpg)
![](./img/Screenshot_55.jpg)

## Tarea y Solución
![](./img/Screenshot_56.jpg)
![](./img/Screenshot_57.jpg)
![](./img/Screenshot_58.jpg)
![](./img/Screenshot_59.jpg)
![](./img/Screenshot_60.jpg)







