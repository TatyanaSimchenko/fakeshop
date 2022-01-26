import { MainReduserState } from "../../interfaces/interfaces"
import { Dispatch } from "redux"
import { connect } from "react-redux"
import ProductList from "./ProductList"



const mapStateToProps = (state: MainReduserState): Partial<MainReduserState> => ({...state})
const mapDispatchToProps = (dispatch: Dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)