import { useState, useEffect } from 'react';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

// useEffect: Es un hook de react que sirve para disparar efectos secundarios (procesos que se ejecutan
// previamente cuando algo suceda).

export const GifGrid = ({ category }) => {

    // Hacemos un custom hook
    const { images, isLoading } = useFetchGifs( category );

    console.log({ images, isLoading });

    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs( category );
    //     setImages(newImages);   
    // };

    // // Desde aquí, traemos la información de una API.
    // useEffect( () => { 
    //     getImages();
    //  }, [])


    return (
        <>
            <h3>{ category }</h3>

            {
                //isLoading ? ( <h2>Cargando...</h2> ) : null
                // Otra forma más eficiente
                isLoading ?? ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    // images.map( image => (
                    //     <li key={ image.id }>{ image.title }</li>
                    // ))

                    // Otra forma de hacerlo es mediante desestructuracion
                    //images.map( ({ id, title }) => (
                        //<li key={ id }>{ title }</li>
                    //    <GifItem key={ id }/>
                    //))
                    
                    images.map( ( image ) => (
                        //<li key={ id }>{ title }</li>

                         <GifItem 
                             key={ image.id }
                             title={ image.title }
                             url={ image.url }
                         />

                        // Otra forma es esparciendo las propiedades mediante ...image
                        // <GifItem 
                        //     key={ image.id }
                        //     { ...image }
                        // />
                    ))
                }
            </div>
        </>
    )
}
