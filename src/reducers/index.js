import { combineReducers } from 'redux';
import skillsSliceReducer from '../components/skills/skillsSlice'
import sportsSliceReducer from '../components/sport/sportSlice'
import infoSliceReducer from '../components/info/infoSlice'

export default combineReducers({
    skills: skillsSliceReducer,
    sport: sportsSliceReducer,
    info: infoSliceReducer,
})
