
import { ThunkDispatch } from "redux-thunk"
import { AxiosResponse } from "axios"
import  { Api }  from "../utils/api"
import { Action, MainReducerState } from "../interfaces/interfaces"

export const setMainState = (payload: any): Action => ({
    type:'SET_MAIN_STATE',
    payload
})

export const fetchProductList = () => async (dispatch: ThunkDispatch<MainReducerState, any, Action>, 
    getState: () => MainReducerState): Promise<void> => {
        try {
            dispatch(setMainState({loading: true}))
            const { searchString } = getState()
            
            const result: AxiosResponse = await Api.get(`/products?title_like=${searchString}`)
            dispatch(setMainState({ products: result.data }))
        } catch(e) {
            console.error(e)
        } finally {
            dispatch(setMainState({loading: false}))
        }
    }
    
    