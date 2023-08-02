import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux'
import { UIactions } from './Store/Redux';
import Notification from './components/UI/Notification';

function App() {

  const showCart=useSelector((state)=>state.ui.showCart)
  const cart=useSelector((state)=>state.Cart)
  const dispatch=useDispatch()
  const notification=useSelector((state)=>state.ui.notification)

  useEffect(()=>{
    const SendCartData= async ()=>{

      dispatch(UIactions.setNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data'
      }))
      try{
        const response = await fetch('https://redux-756d3-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',{
           method: 'PUT',
           body: JSON.stringify(cart)
          }
        )
        if(!response.ok){
          throw new Error('Sending data failed')
        }
        dispatch(UIactions.setNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent cart data successfully'
        }))

      }catch(err){
        dispatch(UIactions.setNotification({
          status: 'error',
          title: 'Error',
          message: err.message
        }))
      }
    }
  },[cart])
  return (
   <Fragment>
      {notification && <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}      
      />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
   </Fragment>
  );
}

export default App;
