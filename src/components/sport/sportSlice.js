import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [
        { content: "swimming", selected: "none" },
        { content: "running", selected: "none" },
        { content: "rollerblading", selected: "none" },
        { content: "dancing", selected: "none" },
        { content: "playing cards", selected: "none" },
    ],
}

const sportSlice = createSlice({
    name: "sport",
    initialState,
    reducers: {
        toggleSelected: (state, action) => {
            const {content, selected} = action.payload;
            const selectedQuestionIndex = state.questions.findIndex(q => q.content === content);
            state.questions[selectedQuestionIndex].selected = selected;
        }
    }
});

export const { toggleSelected } = sportSlice.actions;

export const selectQuestions = state => state.sport.questions;

export default sportSlice.reducer;