const reducer=(state={counter: 0} ,action)=>{

    if(action.type==='incrementby2'){
        state.counter=state.counter+ 2
    }else if(action.type==='decrementby2'){
        state.counter=state.counter-2
    }

    return state
}

const store=redux.createStore(reducer)
