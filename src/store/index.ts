import { ICartState } from './modules/cart/types';
import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

export interface IState {
    cart: ICartState
}

const store = createStore(rootReducer);

export default store;