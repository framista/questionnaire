import React, { useState } from 'react';
import Chips from '../chips';
import { Typography, FormControl, Input, TextareaAutosize, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './skills.css';

const Skills = () => {

    const [languages, setLanguages] = useState({
        english: true,
        german: false,
        french: false,
        polish: false,
        russian: false,
        chinese: false,
        hindi: false,
    });

    const handleChangeLanguage = (event) => {
        setLanguages({ ...languages, [event.target.name]: event.target.checked });
    }

    return (
        <div>
            <Typography className="skills__h3">What programming languages do you know?</Typography>
            <div className="container__chips">
                <Chips />
            </div>
            <form className="skills__form">
                <input
                    className="skills__input"
                    type="text"
                ></input>
            </form>
            <Typography className="skills__h3">Describe the most interesting project, which you have ever created.</Typography>
            <form className="skills__form">
                <textarea
                    className="skills__textarea"
                    rows="5"
                ></textarea>
            </form>
            <Typography className="skills__h3">Which languages do you speak?</Typography>
            <FormGroup row className="skills__languages">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={languages.english}
                            onChange={handleChangeLanguage}
                            name="english"
                            color="primary"
                        ></Checkbox>
                    }
                    label="English"
                ></FormControlLabel>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={languages.german}
                            onChange={handleChangeLanguage}
                            name="german"
                            color="primary"
                        ></Checkbox>
                    }
                    label="German"
                ></FormControlLabel>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={languages.french}
                            onChange={handleChangeLanguage}
                            name="french"
                            color="primary"
                        ></Checkbox>
                    }
                    label="French"
                ></FormControlLabel>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={languages.polish}
                            onChange={handleChangeLanguage}
                            name="polish"
                            color="primary"
                        ></Checkbox>
                    }
                    label="Polish"
                ></FormControlLabel>
                 <FormControlLabel
                    control={
                        <Checkbox
                            checked={languages.russian}
                            onChange={handleChangeLanguage}
                            name="russian"
                            color="primary"
                        ></Checkbox>
                    }
                    label="Russian"
                ></FormControlLabel>
                 <FormControlLabel
                    control={
                        <Checkbox
                            checked={languages.chinese}
                            onChange={handleChangeLanguage}
                            name="chinese"
                            color="primary"
                        ></Checkbox>
                    }
                    label="Chinese"
                ></FormControlLabel>
                 <FormControlLabel
                    control={
                        <Checkbox
                            checked={languages.hindi}
                            onChange={handleChangeLanguage}
                            name="hindi"
                            color="primary"
                        ></Checkbox>
                    }
                    label="Hindi"
                ></FormControlLabel>
            </FormGroup>
        </div>
    )
};

export default Skills;