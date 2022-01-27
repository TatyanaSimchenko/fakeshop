import { MainReducerState } from "../../interfaces/interfaces"
import { Dispatch } from "redux"
import { connect } from "react-redux"
import ProductList from "./ProductList"
import { fetchProductList } from "../../store/actions"
import { ThunkDispatch } from "redux-thunk"



const mapStateToProps = (state: MainReducerState): Partial<MainReducerState> => ({...state})
const mapDispatchToProps = (dispatch: Dispatch & ThunkDispatch<any, any, any>) => ({
    fetchProductList: () => dispatch(fetchProductList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)