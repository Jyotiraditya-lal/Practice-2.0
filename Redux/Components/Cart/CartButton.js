import { UIactions } from '../../Store/Redux';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux'

const CartButton = (props) => {
  const dispatch=useDispatch()
  const quantity=useSelector((state)=>state.Cart.TotalQuantity)

  const CartHandler=()=>{
    dispatch(UIactions.showCart())
  }
  
  return (
    <button className={classes.button} onClick={CartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
