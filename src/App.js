import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export default function App() {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball']);

    /*const handleAdd = () => {
        setCategories([
            ...categories,
            'Megadeth'
        ]);
    }*/

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            
            <ol>
                {categories.map((category, i) => {
                    return (<GifGrid 
                            category={category}
                            key={category}
                        />)
                })}
            </ol>
        </div>
    )
}
