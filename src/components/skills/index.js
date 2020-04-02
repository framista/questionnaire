import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectProgrammingLanguages,
    addProgrammingLanguage,
    removeProgrammingLanguage,
    selectProjectDescription,
    setProjectDescription,
    selectForeignLanguages,
    toggleForeignLanguage,
} from './skillsSlice'
import Chips from '../chips';
import { Typography, FormGroup } from '@material-ui/core';
import './skills.css';
import Checkboxes from '../checkboxes';

const Skills = () => {

    const dispatch = useDispatch();
    const programmingLanguages = useSelector(selectProgrammingLanguages);
    const foreignLanguages = useSelector(selectForeignLanguages);
    const projectDesciption = useSelector(selectProjectDescription);

    const [programmingLanguageInput, setProgrammingLanguageInput] = useState("");

    const onChangeProgrammingLanguageInput = e => setProgrammingLanguageInput(e.target.value);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            dispatch(addProgrammingLanguage(programmingLanguageInput));
            setProgrammingLanguageInput('');
        }
    }

    const handleRemoveProgrammingLanguage = language => {
        dispatch(removeProgrammingLanguage(language));
    }

    const handleToggleForeingLanguage = language => {
        dispatch(toggleForeignLanguage(language))
    }

    const handleProjectDescription = e => dispatch(setProjectDescription(e.target.value))

    return (
        <div>
            <Typography className="skills__h3">What programming languages do you know?</Typography>
            <div className="container__chips">
                <Chips data={programmingLanguages} remove={handleRemoveProgrammingLanguage} />
            </div>
            <form className="skills__form">
                <input
                    className="skills__input"
                    type="text"
                    onKeyPress={handleKeyDown}
                    value={programmingLanguageInput}
                    onChange={onChangeProgrammingLanguageInput}
                ></input>
            </form>

            <Typography className="skills__h3">Describe the most interesting project, which you have ever created.</Typography>
            <form className="skills__form">
                <textarea
                    className="skills__textarea"
                    rows="5"
                    value={projectDesciption}
                    onChange={handleProjectDescription}
                ></textarea>
            </form>

            <Typography className="skills__h3">Which languages do you speak?</Typography>
            <FormGroup row className="skills__languages">
                <Checkboxes data={foreignLanguages} toggle={handleToggleForeingLanguage} />
            </FormGroup>
        </div>
    )
};

export default Skills;