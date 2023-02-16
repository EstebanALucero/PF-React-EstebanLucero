import ProductoContenedor from "../components/ProductoContenedor/ProductoContenedor"

const ItemList = ( {items} ) => {

  return (
    <div className="TarjetaProductos">
    {
    items.map((elemento)=> {
      return <ProductoContenedor elemento={elemento} key={elemento.id}/>
    })
    }
    </div>
  )

}

export default ItemList