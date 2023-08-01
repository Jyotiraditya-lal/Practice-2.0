import { createStore } from 'redux'

const reducer=(state= {counter : 0},action)=>{

    if(action.type==='increment'){
        return({
            counter: state.counter++
        })
    }
    else if(action.type==='decrement'){
        return({
            counter: state.counter--
        })
    }

    return state
}

const store=createStore(reducer)

export default store
