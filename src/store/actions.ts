import { ThunkDispatch } from "redux-thunk"
import  Api  from "../utils/api"
import { Action, MainReducerState } from "../interfaces/interfaces"

export const setMainState = (payload: Partial<MainReducerState>): Action => ({
    type:'SET_MAIN_STATE',
    payload
})

export const fetchProductList = () => async (dispatch: ThunkDispatch<MainReducerState, any, Action>, 
    getState: () => MainReducerState): Promise<void> => {
        try {
            const { searchString } = getState()
            dispatch(setMainState({loading: true}))
            const result = await Api.get(`/products?title_like=${searchString}`)
            dispatch(setMainState({ products: result.data }))
        } catch(e) {
            console.error(e)
        } finally {
            dispatch(setMainState({loading: false}))
        }
    }
    
    