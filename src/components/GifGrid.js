import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/GetGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //const [count, setCount] = useState(0)
    //const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );    

    /*useEffect( () => {
        getGifs( category )
            .then( setImages )
    }, [ category ])*/

    //getGifs();

    /*const handleCount = () => {
        setCount( count + 1 );
    }*/
    
    return (
        <>
            <h3> { category } </h3>
                <h5 className="animate__animated animate__flash"> { loading && 'Cargando...' } </h5>
                <div className="card-grid animate__animated animate__fadeIn">
                    { 
                        images.map( ( img ) => (
                            <GifGridItem 
                                key={ img.id }
                                { ...img }
                            />
                        ))
                    }
                </div>
        </>
    )

}
