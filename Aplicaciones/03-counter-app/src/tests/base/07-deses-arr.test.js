import { retornaArreglo } from "../../base/07-deses-arr"

describe('pruebas en 07-deses-arr', () => {
    test('debe retornar un string y un numero', () => {
        const arr = retornaArreglo(); //['ABC', 123]
        expect(arr).toEqual(['ABC',123]);       
    })
    
})
