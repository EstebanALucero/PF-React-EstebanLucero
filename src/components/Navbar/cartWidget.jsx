import { useContext } from 'react';
import { RiShoppingCartFill } from 'react-icons/ri';
import { Link } from "react-router-dom"

import { CartContext } from '../../context/CartContext';

const CartWidget = (props) => {

  const { getTotalprods } = useContext( CartContext )

  return (
    <div className='carroCompras'>
      <Link to={props.referencia} >
        <RiShoppingCartFill />
        <p>{getTotalprods()}</p>
      </Link>
    </div>
  )
}

export default CartWidget