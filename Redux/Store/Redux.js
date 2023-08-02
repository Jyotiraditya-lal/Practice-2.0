import { createSlice,configureStore } from '@reduxjs/toolkit'


const UIstate={showCart: false}
const CartState={items: [], TotalQuantity: 0}

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
            state.TotalQuantity++;
            if(!exsistingItem){
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price
                })
            }else{
                exsistingItem.quantity++;
                exsistingItem.totalPrice=exsistingItem.totalPrice + newItem.price
            }
        },

        RemoveFromCart(state,action){

            const id=action.payload
            const exsistingItem=state.items.find(item=>id===item.id)
            state.TotalQuantity--;
            if(exsistingItem.quantity===1){
                state.items=state.items.filter(item=>item.id!==id)
            }else{
                exsistingItem.quantity--;
                exsistingItem.totalPrice=exsistingItem.totalPrice-exsistingItem.price
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
