import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export default function GifGrid({ category }) {

    const { loading, images } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            {loading && <p>Loading</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem 
                            {...img}
                            key={img.id}
                        />
                    ))
                }
            </div>
        </>
    )
}
