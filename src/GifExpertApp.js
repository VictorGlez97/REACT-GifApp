import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['Capitan Tsubasa', 'Richard Tex-Tex'];
    const [categories, setcategories] = useState(['Capitan Tsubasa'/*, 'Richard Tex-Tex'*/]);

    /*const handleAdd = () => {    
        setcategories( ['Benji Price', ...categories] );
    }*/

    return (

        <>
            <h2> Gif Expert App </h2>
            <AddCategory setCategories={ setcategories } />
            <hr/>

            <ol>
                { 
                    categories.map( (category, i) => (
                        //return <li key={ i } > { category } </li>
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    )) 
                }
            </ol>

        </>

    )

} 

export default GifExpertApp;