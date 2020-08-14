import {combineReducers} from 'redux'
import addfirstnamereducer from './addfirstreducer'
import addlastnamereducer from './addlastreducer'
import addscorereducer from './addscorereducer'

const allreducer = combineReducers({

    addfirstname:addfirstnamereducer,
    addlastname:addlastnamereducer,
    addscore:addscorereducer
})

export default allreducer