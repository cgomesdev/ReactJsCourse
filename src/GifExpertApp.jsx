import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    // almacenamos las categorias. La inicializamos como un arreglo.
    //const [categories, setcategories] = useState(['One punch', 'Second punch']);
    const [categories, setcategories] = useState([]);

    const onAddCategory = (newCategory) => {
        // para añadir elementos, se usa el setcategories y usamos el spread (...) para conservar
        // los valores anteriores.
        if(categories.includes(newCategory)) return;
        
        console.log(newCategory);

        setcategories([newCategory, ...categories]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories = { setcategories } 

            // Propiedad de mi componente
            onNewCategory = { (value) => onAddCategory(value) }
        />

        <ol>
            { categories.map( (category) => 
                { 
                    //return <li key={ category }>{ category }</li>; 
                    return <GifGrid 
                          key={ category }
                          category={ category }
                      />
                }) 
            }
        </ol>
    </>
  )
}
