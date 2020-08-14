const addfirstnamereducer =function Addfirstname(state=null,action){
    console.log(action)
    switch(action.type){
        case 'ADD_FIRST_NAME':
            return action.payload
        default:
            break;    
    }
    return state
}

export default addfirstnamereducer