import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import  AddCategory  from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', ()=>{

    const setCategories = jest.fn();//prueba hacemos una funcion
    //que no hace nada y se la pasamos como argumento
    let wrapper = shallow(<AddCategory setCategories= {setCategories}/>)

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories= {setCategories}/>)
    });


    test('debe de mostrarse correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    })


    test('debe de cambiar la caja de texto',()=>{

        const input = wrapper.find('input');

        const value = 'Hola Mundo'

        input.simulate('change',{target:{value:value}});

        expect(wrapper.find('p').text().trim()).toBe(value);

    })

    test('No debe de postear la informacion con submit',()=>{

        wrapper.find('form').simulate('submit',{preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled();
    })


    test('debe de llamar al setCategories y limpiar la caja de texto',()=>{
      
        const value = 'hola';

        //1. simular el inputChange
        wrapper.find('input').simulate('change',{target:{value:value}})

        //2. simular el submit
        wrapper.find('form').simulate('submit',{preventDefault(){}})

        //3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1); // se ejecuta una vez solamente

        //4. el valor del input debe de estar '';
        expect(wrapper.find('input').prop('value')).toBe('');


    })


})