
//Desestructuración - Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

// const {nombre, edad, clave} = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const userContext = ( {nombre, edad, clave, rango = 'capitan'}) =>{
    // console.log(nombre, edad, clave, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.1264,
            lng: -12.546,
        }
    }
}

const {nombreClave, anios, latlng:{ lat, lng }} = userContext(persona);
console.log(nombreClave, anios, lat, lng);
