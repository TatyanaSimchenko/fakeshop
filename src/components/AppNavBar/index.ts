import AppNavBar from "./AppNavBar";
import { MainReducerState } from "../../interfaces/interfaces";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setMainState } from "../../store/actions";


const mapStateToProps = (state: MainReducerState) => ({...state})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    setMainState: (payload: Partial<MainReducerState>) => dispatch(setMainState(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppNavBar)