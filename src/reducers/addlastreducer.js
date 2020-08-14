const addlastnamereducer = function(state=null,action){
    switch(action.type){
        case 'ADD_LAST_NAME':
            return action.payload
        default:
            break;    
    }
    return state
}
export default addlastnamereducer