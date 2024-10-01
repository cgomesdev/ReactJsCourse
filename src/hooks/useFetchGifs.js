import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
// un hook no es más que una función que regresa algo, como lo siguiente:

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);   
        setIsLoading(false);
     };

     // Desde aquí, traemos la información de una API.
    useEffect( () => { 
        getImages();
      }, []);

  return {
    images,
    isLoading
  }
}
