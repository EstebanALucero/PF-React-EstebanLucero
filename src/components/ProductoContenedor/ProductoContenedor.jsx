import { Link } from "react-router-dom"

const ProductoContenedor = ( {elemento} ) => {
  return (
    <div className="contenedorItem">
        <h2>{elemento.nombre}</h2>
        <h2>${elemento.precio}</h2>
        <div className="imgProducto"><img src={elemento.img} alt="" /></div>
        <h3>{elemento.categoria}</h3>
        <Link to={`/item/${elemento.id}`}><button> Ver mas </button></Link>
    </div>
  )
}

export default ProductoContenedor