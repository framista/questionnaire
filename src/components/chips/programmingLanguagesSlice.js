import { createSlice } from '@reduxjs/toolkit';

const programmingLanguagesSlice = createSlice({
    name: 'programmingLanguages',
    initialState: ['javascript'],
    reducers: {
        addProgrammingLanguage(state, action) {
            const language = action.payload;
            state.push(language);
        }
    }
});

export const { addProgrammingLanguage } = programmingLanguagesSlice.actions;

export default programmingLanguagesSlice.reducer;