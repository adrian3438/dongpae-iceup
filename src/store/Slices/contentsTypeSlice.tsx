import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface typeState {contentType : contentTypes}
interface contentTypes {
    contentType : any
}
const initContentType : contentTypes = {
    contentType : null
}
const initialState : typeState = {
    contentType : initContentType
}

export const contentsTypeReducer = createSlice({
    name : 'contentTypeData',
    initialState,
    reducers : {
        setContentType : (state, action : PayloadAction<contentTypes>) => {
            state.contentType = action.payload;
        }
    }
})

export const {setContentType} = contentsTypeReducer.actions;
export default contentsTypeReducer.reducer