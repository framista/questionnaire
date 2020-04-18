import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    information: [
        { content: 'firstname', value: "", error: "" },
        { content: 'lastname', value: "", error: "" },
        { content: 'email', value: "", error: "" },
        { content: 'levelEducation', value: "", error: "" },
        { content: 'dateOfBirth', value: "", error: "" },
        { content: 'imgUrl', value: "", error: "" },
    ]
}

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setInformation: (state, action) => {
            const { content, value } = action.payload;
            const selectedContentIndex = state.information.findIndex( i => i.content === content);
            state.information[selectedContentIndex].value = value;
        }
    }
})

export const { setInformation } = infoSlice.actions;

export const selectInformation = state => state.info.information;

export default infoSlice.reducer;