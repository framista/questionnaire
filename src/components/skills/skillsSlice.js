import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    programmingLanguages: ["JavaScript"],
    foreignLanguages: [
        { content: 'english', valid: true },
        { content: 'polish', valid: false },
        { content: 'spanish', valid: false },
        { content: 'french', valid: false },
        { content: 'chinese', valid: true },
        { content: 'russian', valid: false },
        { content: 'hindi', valid: false },
    ],
    errorProgrammingLanguage: '',
    projectsDescription: '',
}

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        addProgrammingLanguage: (state, action) => {
            const language = action.payload;
            state.programmingLanguages.push(language);
        },
        setErrorProgrammingLanguage: (state, action) => {
            state.errorProgrammingLanguage = action.payload;
        },
        removeProgrammingLanguage: (state, action) => {
            const language = action.payload;
            const languageIndex = state.programmingLanguages.indexOf(language);
            state.programmingLanguages.splice(languageIndex, 1);
        },
        setProjectDescription: (state, action) => {
            state.projectsDescription = action.payload;
        },
        toggleForeignLanguage: (state, action) => {
            const language = action.payload;
            const languageIndex = state.foreignLanguages.findIndex(l => l.content === language);
            state.foreignLanguages[languageIndex].valid = !state.foreignLanguages[languageIndex].valid;
        }
    }
});

export const { addProgrammingLanguage, setErrorProgrammingLanguage, removeProgrammingLanguage, setProjectDescription, toggleForeignLanguage } = skillsSlice.actions;

export const selectProgrammingLanguages = state => state.skills.programmingLanguages;

export const selectErrorProgrammingLanguage = state => state.skills.errorProgrammingLanguage;

export const selectForeignLanguages = state => state.skills.foreignLanguages;

export const selectProjectDescription = state => state.skills.projectsDescription;

export default skillsSlice.reducer;