import React from 'react';
import QuestioRadio from '../questionRadio';
import './sport.css'
import { Typography } from '@material-ui/core';

const Sport = () => {
    return (
        <div>
            <div className="container__command">
                <Typography className="sport__h3">Do you like:</Typography>
                <div className="container__options">
                    <Typography className="sport__h3">YES</Typography>
                    <Typography className="sport__h3">NO</Typography>
                </div>
            </div>
            <QuestioRadio />
            <QuestioRadio />
            <QuestioRadio />
            <QuestioRadio />
            <QuestioRadio />
        </div>
    )
};

export default Sport;