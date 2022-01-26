import { MainReduserState, Action } from "../interfaces/interfaces";

const cart = localStorage.getItem('cart')

export const initialState: MainReduserState = {
    loading: false,
    products: [],
    cart: cart ? JSON.parse(cart) : [] ,
    searchString: '',
    sortBy: 'LOW',
    currency: 'USD'

}
const reducer = (state: MainReduserState = initialState, action: Action): MainReduserState => {
    const { type, payload } = action
    switch(type) {
        case 'SET_MAIN_STATE':
            return { ...state, ...payload }
            default:
                return state
    }
}

export default reducer;