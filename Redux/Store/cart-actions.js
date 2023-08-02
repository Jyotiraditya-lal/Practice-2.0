import { CartActions } from "./Redux"
import { UIactions } from "./Redux"

export const fetchData= ()=>{
    return async(dispatch)=>{
        const fetch= async()=>{
            const response = await  fetch('https://redux-756d3-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')
            if(!response.ok){
                throw new Error ('Couldnt fetch data')
            }
       
            const data= await response.json()
            return data
      }
      try{
        const CartData=await fetch()
        dispatch(CartActions.replaceCart(CartData))
      }catch (err){
        dispatch(UIactions.setNotification({
          status: 'error',
          title: 'Error',
          message: err.message
        }))
      }
    }
    
}

  
