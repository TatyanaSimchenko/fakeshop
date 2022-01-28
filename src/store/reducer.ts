
import { MainReducerState, Action } from "../interfaces/interfaces";

const cart = localStorage.getItem('cart')

export const initialState: MainReducerState = {
    loading: false,
    products: [],
    cart: cart ? JSON.parse(cart) : [] ,
    searchString: '',
    sortBy: 'LOW',
    currency: 'USD',
    fetchOffset: 0

}
const reducer = (state: MainReducerState = initialState, action: Action) => {
    const { type, payload } = action
    switch(type) {
        case 'SET_MAIN_STATE':
            return { ...state, ...payload }
            default:
                return state
    }
}

export default reducer;