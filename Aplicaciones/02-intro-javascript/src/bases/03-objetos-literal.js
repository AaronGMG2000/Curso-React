const persona = {
    nombre: 'Rudy',
    apellido: 'Marroquín',
    edad: 20,
    direccion: {
        ciudad: 'San Martin Jilotepeque',
        zip: '04003',
    }
}
//copiar objetos con {...variable}
const persona2 = {...persona};

console.log(persona);
console.log(persona2);

