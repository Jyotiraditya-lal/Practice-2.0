const redux= require('redux')

const reducer=(state={counter: 0} ,action)=>{

    if(action.type==='increment'){
        state.counter++
    }else if(action.type==='decrement'){
        state.counter--
    }

    return state
}

const store=redux.createStore(reducer)
console.log(store.getState())

const counterSub=()=>{

    const latestState=store.getState()
    console.log(latestState)
}

store.subscribe(counterSub)

store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})
