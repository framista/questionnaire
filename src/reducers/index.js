import { combineReducers } from 'redux';
import skillsSliceReducer from '../components/skills/skillsSlice'

export default combineReducers({
    skills: skillsSliceReducer,
})
