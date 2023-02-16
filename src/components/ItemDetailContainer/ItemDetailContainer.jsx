import { useEffect, useState } from "react"
import { products } from "../productosLibreria"

import { useParams } from "react-router-dom"  

const ItemDetailContainer = () => {

    const { id } = useParams()

    const [produt, setProduct] = useState({})


    useEffect( () => {

        let productSelector = products.find( elemento => elemento.id === +id)

        setProduct(productSelector)

    } )

  return (
    <div>
        <h2>{produt.nombre}</h2>
        <h2>${produt.precio}</h2>
        <div className="imgProducto"><img src={produt.img} alt="" /></div>
        <h3>{produt.categoria}</h3>
        <p>{produt.descripcion}</p>
    </div>
  )
}

export default ItemDetailContainer