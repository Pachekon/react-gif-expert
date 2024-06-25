import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { Gifitem } from "./Gifitem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category}) => {
  const { images, isLodaing } = useFetchGifs ( category);
  return (
    <>
        <h3>{ category }</h3>
        {
          isLodaing && ( <h2>Loading ...</h2> )
        }
        <div className="card-grid">
          {
            images.map( ( image ) => (
              <Gifitem 
                key={ image.id }
                { ...image }
                // title = { image.title }
                // url = { image.rul}
              />
            ))
          }
        </div>
        
    </>
  )
}
