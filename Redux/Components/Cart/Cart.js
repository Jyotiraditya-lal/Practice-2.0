import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { CartActions } from '../../Store/Redux';

const Cart = () => {

  const items=useSelector((state)=>state.Cart.items)
  const dispatch=useDispatch()

  const AddfromCart=(item)=>{
    dispatch(CartActions.AddToCart(item))
  }

  const RemoveHandler=(id)=>{
    dispatch(CartActions.RemoveFromCart(id))
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(item=>
          <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          total={item.totalPrice}
          quantity={item.quantity}
          onAdd={AddfromCart.bind(null,item)}
          onRemove={RemoveHandler.bind(null,item.id)}
        />
        )}
      </ul>
    </Card>
  );
};

export default Cart;
