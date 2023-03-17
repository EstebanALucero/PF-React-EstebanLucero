import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"


import { db } from "../../firebasevonfig"
import ItemList from "../../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = (props) => {

const { categoriaName } = useParams ()
  
const [items, setItems] = useState( [] )

useEffect( ()=>{

  const itemCollection = collection( db , "products" )

  if( categoriaName ){

    const q = query( itemCollection, where( "categoria", "==", categoriaName ) )

    getDocs(q)
    .then( (res)=>  {
      const products = res.docs.map( product => {
        return {
          ...product.data(),
          id: product.id
        }
      } )

      setItems( products )

    })
    .catch( (err)=> console.log("error") )
  }else{
    getDocs(itemCollection)
    .then( (res)=>  {
      const products = res.docs.map( product => {
        return {
          ...product.data(),
          id: product.id
        }
      } )

      setItems( products )

    })
    .catch( (err)=> console.log("error") )
  }

}, [ categoriaName ]);

return (
  <>
  <ItemList items={items}/>
  </>
);

}

export default ItemListContainer