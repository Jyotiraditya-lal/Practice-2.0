import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { CartActions } from '../../Store/Redux';

const ProductItem = (props) => {
  
  const dispatch=useDispatch()

  const AddItemHandler=()=>{
    const item={
      id: props.id,
      title: props.title,
      price: props.price
    }

    dispatch(CartActions.AddToCart(item))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
        </header>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={AddItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
