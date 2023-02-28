import {combineReducers} from 'redux' ;
import { addToCartReducers } from './addToCartReducers';

export default combineReducers({
    addToCart : addToCartReducers,
})