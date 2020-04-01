import { combineReducers } from 'redux';
import programmingLanguagesReducer from '../components/chips/programmingLanguagesSlice'

export default combineReducers({
    programmingLanguages: programmingLanguagesReducer,
})
