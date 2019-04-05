
const initInc = {count:3};

export const reducerCount = (state = initInc,action:any ) =>{
    console.log('reducer',state,action);

    switch(action.type){
        case 'INCREMENT':
            const obj = {...state,count:state.count+1};
            return obj
        default:
        return state;
    }
}
