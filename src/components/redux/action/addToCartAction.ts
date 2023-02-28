import {GET_SELECTED_PRODUCT,UPDATE_SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT} from '../action/actionType'

export const getProduct = () => {
  return {
    type: GET_SELECTED_PRODUCT,
  };
};


export const updateProduct  = (productKey: string, number: any) => {
  return {
    type: UPDATE_SELECTED_PRODUCT,
    productKey: productKey,
    payload: number,
  };
};

export const removeProduct  = (productKey: string, number: number) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
    productKey: productKey,
    payload: number,
  };
};
