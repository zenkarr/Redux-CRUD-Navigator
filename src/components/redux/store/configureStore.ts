import {createStore,applyMiddleware} from 'redux' ;
import rootReducer from '../reducers/indexCombine';

export default function configureStore(initialState : any) {
    return createStore (rootReducer,initialState);
}