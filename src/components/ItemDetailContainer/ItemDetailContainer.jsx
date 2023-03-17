import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDoc, collection, doc } from "firebase/firestore"

import ItemCount from "../ItemCount/ItemCount"
import { db } from "../../firebasevonfig"
import { CartContext } from "../../context/CartContext"

const ItemDetailContainer = () => {

    const { id } = useParams()

    const [produt, setProduct] = useState({})


    useEffect( () => {

        const itemCollection = collection( db, "products" )
        const ref = doc( itemCollection, id )

        getDoc(ref)
          .then( (res)=> {
            setProduct( {
              ...res.data(),
              id: res.id
            } )
          } )
          .catch( err => console.log("error"))
    } )

    const { addToCart, getQuantityById } = useContext( CartContext )

    const onAdd = ( cantidad ) => {

      const prod = {
        ...produt,
        cantidad: cantidad
      }
      addToCart( prod )
    }

    const quantity = getQuantityById(produt.id)

  return (
    <div>
      <div>
        <h2>{produt.nombre}</h2>
        <h2>${produt.precio}</h2>
      </div>
      <div>
        <div className="imgProducto"><img src={produt.img} alt="" /></div>
        <h3>{produt.categoria}</h3>
        <p>{produt.descripcion}</p>
      </div>
      <div>
        <ItemCount stock={produt.stock} initial={quantity} onAdd={onAdd}/>
      </div>
    </div>
  )
}

export default ItemDetailContainer