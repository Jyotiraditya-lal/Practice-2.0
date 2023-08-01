import { createSlice,configureStore } from '@reduxjs/toolkit'


const UIstate={showCart: false}
const CartState={items: [], totalPrice: 0, quantity: 0}

const UIslice=createSlice({
    name: 'ui',
    initialState: UIstate,
    reducers: {
        showCart(state){
            state.showCart=!state.showCart
        }
    }
})



const CartSlice=createSlice({
    name: 'Cart',
    initialState: CartState,
    reducers: {
        AddToCart(state,action){
            const newItem=action.payload;
            const exsistingItem=state.items.find(item=>item.id===newItem.id)
            if(!exsistingItem){
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    quantity: 1,
                    price: newItem.price
                })
            }else{
                exsistingItem.quantity=exsistingItem.quantity+1;
                exsistingItem.price=exsistingItem.price+newItem.price
            }
        }
    }
})

const store=configureStore({
    reducer: {ui: UIslice.reducer, Cart: CartSlice.reducer}
})

export const UIactions=UIslice.actions
export const CartActions=CartSlice.actions

export default store
