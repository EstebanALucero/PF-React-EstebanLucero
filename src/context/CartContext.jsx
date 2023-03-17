import { useState, createContext } from "react"

export const CartContext = createContext()

const CartContextProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState([])

    const addToCart = ( prod ) => {
        let exist = isInCart( prod.id )

        if( exist ){

            let newCart = carrito.map( (item) => {
                if(item.id === prod.id){
                    let newProd = {
                        ...item,
                        cantidad: prod.cantidad
                    }
                    return newProd
                }else{
                    return item
                }
            })

            setCarrito(newCart)

        }else{
            setCarrito( [ ...carrito, prod ] )
        }
    }

    const clearCart = () => {
        setCarrito( [] )
    }

    const deleteProductById = ( id ) => {
        let newCarrito = carrito.filter ( prod => prod.id !== id )
        setCarrito(newCarrito)
    }

    const isInCart = ( id ) => carrito.some( element => element.id === id )

    const getQuantityById = ( id ) => {
        let prod = carrito.find( element => element.id === id )
        return prod?.cantidad
    }

    const getTotalprods = () => {
        const total = carrito.reduce( ( acc, element ) =>{
            return acc + element.cantidad
        }, 0 )
        return total
    }

    const getTotalPrice = () => {
        const total = carrito.reduce( ( acc, element ) => {
            return acc + ( element.precio * element.cantidad )
        }, 0 )
        return total
    }

    let data = {
        carrito,
        addToCart,
        clearCart,
        deleteProductById,
        getQuantityById,
        getTotalprods,
        getTotalPrice,
    }

  return (
    <CartContext.Provider value={ data }>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider