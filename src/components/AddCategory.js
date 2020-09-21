import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setinputValue] = useState('');
    
    const handleImputChange = ( e ) => {
        //console.log( e )
        //console.log( inputValue )
        //console.log( e.target.value )
        setinputValue( e.target.value )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        //console.log('SUBMIT')

        if ( inputValue.trim().length > 2 ){
            setCategories( category => [ inputValue, ...category ]); 
            setinputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
              type="text"
              value={ inputValue }
              onChange={ handleImputChange }
            />  
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}