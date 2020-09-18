import React from 'react';
import {shallow} from 'enzyme'
import GifExpertApp from '../GifExpertApp';


describe('Pruebas con <GifExpertApp />',()=>{

    test('debe mostrar <GifExpertApp /> correctamente',()=>{

        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostar una lista de categorias', ()=>{
        const categories = ['One Punch', 'Dragon Ball'];

        const wrapper  = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)



    })
})