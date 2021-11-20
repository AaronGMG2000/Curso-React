import React from "react";
import { shallow } from "enzyme"
import PrimeraApp from '../PrimeraApp';

describe('pruebas en <PrimeraApp/>', () => {
    test('debe mostrar <PrimeraApp/> correctamente', () => {
        const saludo = "hola";
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = "hola";
        const subtitulo = "Esto es un subtitulo"
        const wrapper = shallow(<PrimeraApp 
            saludo={saludo}
            subtitulo = {subtitulo}
        />);
        
        const textParrafo = wrapper.find('p').text();
        expect(textParrafo).toBe(subtitulo);
    });
})
