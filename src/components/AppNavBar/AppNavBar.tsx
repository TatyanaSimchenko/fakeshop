import React from 'react';
// import debonce from 'lodash/debounce'

import { MainReducerState } from "../../interfaces/interfaces";
import { Navbar, Form } from "react-bootstrap";
// import { Action } from 'redux';


type Props = Partial<MainReducerState>

// type Props = Partial<MainReducerState> & 
// { setMainState: (payload: any): Action => void }

// type Props = Partial<MainReducerState> & 
// { setMainState: (payload: Partial<MainReducerState>) => void }

const AppNavBar = (props: Props,setMainState: (payload: any) => void ) => {
// const {setMainState} = props

//     const onSearch = (e: any) => {
//         const { target: { value } } = e
//         setMainState({ searchString: value })
//     }

//     const onSearch = ({ target }: any): void => {
//         setMainState({
//             fetchOffset: 0,
//             searchString: target.value
//         })
//     }

//     const onSelectChange = (key: string) => ({ target }: any): void => {
//         setMainState({
//             [key]: target.value
//         })
//     }


    return (
        <Navbar bg="dark" variant="dark" className='mb-4'>
            <Navbar.Brand href="/" className="ms-4">FakeShop</Navbar.Brand>
            <div className="d-flex flex-column">
                <Form>
                    <Form.Control
                        // onChange={debonce(onSearch, 1000)}
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2 mb-4" />
                </Form>
                <Form>
                    <Form.Label className="text-light">Sort by:</Form.Label>
                    <Form.Control
                        as="select"
                        className="ml-4"
                        // onChange={onSelectChange('sortBy')}
                    >
                        <option value="LOW">Price: Low to Hight</option>
                        <option value="HIGHT">Price: Hight to Low</option>
                    </Form.Control>
                </Form>
            </div>
        </Navbar>
    )
}

export default AppNavBar