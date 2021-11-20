import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('prueba en el metodo getsaludo', () => {
        const nombre = 'Rudy';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe( `Hola ${nombre}`);
    });
    
    test('getSaludo retorna hola Rudy! si no se envia parametro', () => {
        const saludo = getSaludo();
        expect(saludo).toBe( `Hola Rudy!`);
    });
    
});
