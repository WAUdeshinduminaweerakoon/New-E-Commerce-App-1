import{createSlice} from "@reduxjs/toolkit"

const initialState = [{
    id:'category1',
    title:''
}]
const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers:{}
})