//Funciones

// no hacerlas asi
// function saludar(nombre){
//     return `hola, ${nombre}`;
// }

const saludar = function (nombre){
    return `hola, ${nombre}`
}

const saludar2 = (nombre) =>{
    return `hola, ${nombre}`
}

const saludar3 = (nombre) =>`hola, ${nombre}`


console.log(saludar('Rudy'));
console.log(saludar2('Aarón'));
console.log(saludar3('Gopal'));

const getUser = ()=>
    ({
        uid: '123',
        username: 'AaronMG2000'
    });

console.log(getUser());

const getUsuarioActivo = (nombre) =>
    ({
        uid: 'ABCD',
        username: nombre
    });

const usuarioactivo = getUsuarioActivo('Rudy');
console.log(usuarioactivo);
