import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () =>{

    //const categories = ['One Punch', 'Samurai x', 'Dragon Ball']
    const [categories, setCategories] = useState(['X-men'])

    /*
    const handleAdd = () =>{
        //setCategories([...categories,'hollaaa']);
        setCategories(cats =>[...cats,'juan'])
    }
    */

    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr/>
            {/*<button onClick={handleAdd}>Agregar</button>*/ }
            
            
           <ol>
               {/*
                   categories.map(category =>{
                       return (<li key={category}>{category}</li>)
                   })
                */}
                {
                    categories.map(category =>{
                        return (
                            <GifGrid 
                            key = {category}
                            category={category} />
                        )
                    })
                }
           </ol>
        </div>
    )
}

export default GifExpertApp;