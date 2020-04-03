import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectQuestions,
    toggleSelected,
} from './sportSlice'
import Radions from '../radions';
import './sport.css'
import { Typography } from '@material-ui/core';

const Sport = () => {

    const dispatch = useDispatch();
    const questions = useSelector(selectQuestions);

    const handleToggleRadion = answer => {
        // console.log('content')
        // console.log(content)
        console.log(answer)
        dispatch(toggleSelected(answer));
    }

    return (
        <div>
            <div className="container__command">
                <Typography className="sport__h3">Do you like:</Typography>
                <div className="container__options">
                    <Typography className="sport__h3">YES</Typography>
                    <Typography className="sport__h3">NO</Typography>
                </div>
            </div>
            <Radions data={questions} toggle={handleToggleRadion} />
        </div>
    )
};

export default Sport;