import { GET_SELECTED_PRODUCT,UPDATE_SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT} from '../action/actionType';

const initialState:any = {
  menProduct:[],
  womenProduct:[],
};

export const addToCartReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SELECTED_PRODUCT : return state;
    case UPDATE_SELECTED_PRODUCT:
      return {
        ...state,

        //  [action.productKey]: state.menProduct.push([action.newItem])
         [action.productKey]:[...state[action.productKey], { 
          id: action.payload.id,
          name: action.payload.name,
          actualPrice: action.payload.actualPrice,
          discountPrice: action.payload.discountPrice,
          discount: action.payload.discount,
          imageUrl: action.payload.imageUrl,
          description: action.payload.description
          }]


      };

    case REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        [action.productKey]: state[action.productKey] + Number(action.orderCount),
      };

    default:
      return state;
  }
};
