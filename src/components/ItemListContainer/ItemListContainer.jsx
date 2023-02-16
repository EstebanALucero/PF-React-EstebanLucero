import { useEffect, useState } from "react"
import ItemList from "../../ItemList/ItemList"
import { products } from "../productosLibreria"
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  
const [items, setItems] = useState( [] )

useEffect( ()=>{
  const task = new Promise((res, rej) => {
    res(products)
  });

  task
    .then((res) => {
      setItems( res )
    })
    .catch(() => {
      console.log( "Se produjo un error." )
    });

}, []);

return (
  <>
  <ItemList items={items}/>
  </>
);

}

export default ItemListContainer