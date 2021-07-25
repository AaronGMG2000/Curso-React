import { getHereobyID } from "./bases/08-imports";

// const promesa = new Promise(( resolve, reject)=>{
    
//     setTimeout(() => {
//         const heroe = getHereobyID(2);
//         resolve(heroe);
//     }, 2000);
// });

// promesa.then( (heroe)=>{
//     console.log(heroe);
// }).catch((error)=>{
//     console.warn(error);
// })

const getHeroeByIdAsync = (id) => {
    return new Promise(( resolve, reject)=>{
    
        setTimeout(() => {
            const heroe = getHereobyID(id);
            if (heroe) {
                resolve(heroe);
            }
            reject("Error al encontrar el Heroe");
        }, 2000);
    });
}

getHeroeByIdAsync(0)
    .then( console.log )
    .catch( console.warn );