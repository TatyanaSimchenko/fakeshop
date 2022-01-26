import { Action, MainReduserState } from "../interfaces/interfaces"

export const setMainState = (payload: MainReduserState): Action => ({
    type:'SET_MAIN_STATE',
    payload
})