import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //simularrrr useFetchGifs

describe('pruebas con <GifGrid />', () => {

    const category = 'goku'

    
    
    test('debe mostrar <GifGrid /> correctamente',()=>{

        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        })

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()

    })

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs',()=>{

        const gifs = [{
            id:'ABC',
            url:'https://localhost',
            title: 'something'
        },
        {
            id:'134',
            url:'https://localhost',
            title: 'something'
        }]


        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        })

        const wrapper = shallow(<GifGrid category={category} />)
        
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })

})
