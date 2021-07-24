//Arreglos

// const arreglo = new Array();
const arreglo = [1,2,3,4];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);


//copiar arreglos y agregar un nuevo dato

let arreglo2 = [...arreglo, 5];

//copiar arreglo con función
const arreglo3 = arreglo2.map(function(x){
    return x*2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

