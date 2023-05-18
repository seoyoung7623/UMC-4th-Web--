const ADD_PRODUCT = "products/ADD_PRODUCT";

// Action creators
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

// state
const initialState = {
  products: [
    {
      id: 0,
      name: "사과",
      price: 12000,
      detail: "싱싱한 문경 사과!",
    },
  ],
};

// 리듀서
export default function products(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    default:
      return state;
  }
}
