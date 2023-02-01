import { RiShoppingCartFill } from 'react-icons/ri';

const CartWidget = (props) => {
  return (
    <div className='carroCompras'>
        <RiShoppingCartFill />
        <p>{props.cantidad}</p>
    </div>
  )
}

export default CartWidget