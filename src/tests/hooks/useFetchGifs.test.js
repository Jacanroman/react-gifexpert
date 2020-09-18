import React from 'react';
import {useFetchGifs} from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks';



describe('Pruebas en el hook useFetchGift',()=>{


    test('debe de retornar el estado inicial',async()=>{

        const category = 'Goku'

        //const {data, loading} = useFetchGifs(category);

        const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs(category))

        const {data, loading} = result.current;
        //console.log(data, loading)


        await waitForNextUpdate()

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe de retornar un arreglo de ims y loading in false', async()=>{

        const category = 'Goku'

        const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs(category))
        await waitForNextUpdate()

        const {data, loading} = result.current;
        //console.log(data, loading)

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })

})