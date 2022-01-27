import { Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';
import { IconButton } from '@material-ui/core';


export const CartWidget=()=>{
    const {cartContent,itemsOnCart}=useCart();
    const [quantity, setQuantity]=useState(0)
    useEffect(()=>{ setQuantity(itemsOnCart(cartContent));
     },[cartContent, itemsOnCart])
    return(
        <>
            <Link to="/cart"><IconButton aria-label="show cart items" color="inherit">
                 <Badge color="secondary" badgeContent={quantity} >
                 <ShoppingCart fontSize="large" color="primary" />
                 </Badge>
              </IconButton>
            </Link>
        </>
    );
}
export default CartWidget