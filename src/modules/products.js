const ADD_PRODUCT = "products/ADD_PRODUCT";

let nextId = 1;
export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: {
      id: nextId++,
      ...product,
    },
  };
}

const initialState = {
  products: [],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}
