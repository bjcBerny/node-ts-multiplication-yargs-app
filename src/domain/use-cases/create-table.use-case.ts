/* 
* aquí se crea la data del archivo 
*/

export interface CreateTableUseCase { 
    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}


export class CreateTable implements CreateTableUseCase {

    constructor(
        /*
        ! DI - Dependency Injection
        */
    ){}

    execute({ base, limit = 10}: CreateTableOptions) {

        let outputMessage = '';

        for(let i=1; i<= limit; i++) {
            outputMessage += `\n ${base} * ${i} = ${base*i}`;
        }

        return outputMessage;
    }

}

/*
* La ventaja de hacer mediante "Dependency Injection" algo es que dentro del "execute" nosotros vamos a poder utilizar las dependencias que vienen del mundo exterior.
*/