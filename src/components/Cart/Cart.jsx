import { useContext } from "react"

import { CartContext } from "../../context/CartContext";

const Cart = () => {

    const { carrito, clearCart, deleteProductById, getTotalPrice } = useContext( CartContext )

    return (
        <div>
            {
                carrito.map( item => {
                    return <div key={item.id} style={{border: "2px solid black"}}>
                        <h3>Nombre: {item.nombre}</h3>
                        <h3>Precio: ${item.precio}</h3>
                        <h3>Cantidad: {item.cantidad}</h3>
                        <button onClick={ () => deleteProductById( item.id ) }>Quitar del carrito</button>
                    </div>
                } )
            }

            <button onClick={clearCart}>Limpiar Carrito</button>
            <h1>El total es ${getTotalPrice()}</h1>
        </div>
    )
}

export default Cart;