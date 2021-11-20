import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect(user).toEqual( userTest);
    })
    

    test('getUsuarioActivo debe retornar un objeto', () => {
        const userTest ={
            uid: 'ABC567',
            username: 'Rudy'
        }

        const user = getUsuarioActivo('Rudy');
        expect(user).toEqual( userTest);
    })
})
