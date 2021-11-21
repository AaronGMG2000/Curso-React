import React from "react";
import { shallow } from "enzyme"
import CounterApp from "../CounterApp";

describe('pruebas en <CounterApp/>', () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach(() =>{
        wrapper = shallow(<CounterApp />);
    });

    test('debe mostrar <CounterApp/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor por defecto de 100', () => {
        const value = 100;
        const text = "100";
        const wrapper = shallow(<CounterApp 
            value={value}
        />);
        const textParrafo = wrapper.find('h2').text().trim();
        expect(textParrafo).toBe(text);
    });

    test('Incrementar con el motor de +1', ()=>{
        wrapper.find('button').at(0).simulate('click');
        const textParrafo = wrapper.find('h2').text().trim();
        expect(textParrafo).toBe('11');
    });

    test('Incrementar con el motor de -1', ()=>{
        wrapper.find('button').at(2).simulate('click');
        const textParrafo = wrapper.find('h2').text().trim();
        expect(textParrafo).toBe('9');
    });

    test('Incrementar con el motor de reset', ()=>{
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const textParrafo = wrapper.find('h2').text().trim();
        expect(textParrafo).toBe('10');
    });
})
