import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) =>{
    
    const [inputValue, SetInputValue] = useState('')
    
    const handleInputChange = (e) =>{
        //console.log(e.target.value)
        SetInputValue(e.target.value)

        //console.log('handleInputChangellamada');
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        //console.log('Submit hecho')
        if( inputValue.trim().length >2){
            setCategories(cats =>[inputValue,...cats])
            SetInputValue('');
        }
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input 
                type="text"
                value = {inputValue}
                onChange={ handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}


export default AddCategory;