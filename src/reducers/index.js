import { combineReducers } from 'redux';
import skillsSliceReducer from '../components/skills/skillsSlice'
import sportsSliceReducer from '../components/sport/sportSlice'

export default combineReducers({
    skills: skillsSliceReducer,
    sport: sportsSliceReducer,
})
