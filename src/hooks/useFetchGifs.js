import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLodaing, setisLodaing] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs( category );
        setImages(newImages);
        setisLodaing( false );
    }
      useEffect( ( ) => {
          getImages();
      }, [])

  return { 
        images, 
        isLodaing
    }
}
