
const initInc = {count:3};

export const reducerCount = (state = initInc,action:any ) =>{
    console.log('reducer',state,action);

    switch(action.type){
        case 'INCREMENT':
            const obji = {...state,count:state.count+1};
            return obji
        case 'DECREMENT':
            const objd = {...state,count:state.count+1};
            return objd
        default:
        return state;
    }
}
