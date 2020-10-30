import { IProduct } from './types';

export function addProductToCart(product: IProduct) {
    return {
        type: 'ADD_PRDOCUT_TO_CART',
        payload: {
            product,
        }
    }
}