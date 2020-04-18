import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectInformation,
    setInformation,
} from './infoSlice';
import { FormGroup, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import './info.css';

const Info = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const information = useSelector(selectInformation);

    console.log(information)
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const content = event.target.name;
        const value = event.target.value;
        dispatch(setInformation({ content, value }));
    };

    const onSubmit = async data => {
        console.log(data)
    }

    console.log(errors)

    return (
        <form className="infocontainer">
            <FormGroup >
                <FormControl margin='dense' >
                    <InputLabel htmlFor="my-input" error={!!errors.firstname}
                    >First name</InputLabel>
                    <Input
                        aria-describedby="my-helper-text"
                        name="firstname"
                        value={information[0].value}
                        onChange={handleChange}
                        error={!!errors.firstname}
                        inputRef={register({
                            required: true
                        })}
                        onBlur={handleSubmit(onSubmit)}
                    />
                    {errors.firstname && errors.firstname.type === 'required' &&
                        <FormHelperText error>Field cannot be empty</FormHelperText>}
                </FormControl>
                <FormControl margin='dense'>
                    <InputLabel htmlFor="my-input" error={!!errors.lastname}>Last name</InputLabel>
                    <Input
                        aria-describedby="my-helper-text"
                        name="lastname"
                        value={information[1].value}
                        onChange={handleChange}
                        onBlur={handleSubmit(onSubmit)}
                        error={!!errors.lastname}
                        inputRef={register({
                            required: true
                        })}
                    />
                    {errors.lastname && errors.lastname.type === 'required' &&
                        <FormHelperText error>Field cannot be empty</FormHelperText>}
                </FormControl>
                <FormControl margin='dense'>
                    <InputLabel htmlFor="my-input" error={!!errors.email}>Email</InputLabel>
                    <Input
                        aria-describedby="my-helper-text"
                        name="email"
                        value={information[2].value}
                        onChange={handleChange}
                        onBlur={handleSubmit(onSubmit)}
                        error={!!errors.email}
                        inputRef={register({
                            required: true,
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Invalid email"
                            }
                        })}
                    />
                    {errors.email && errors.email.type === 'required' &&
                        <FormHelperText error>Field cannot be empty</FormHelperText>}
                    {errors.email && errors.email.type === 'pattern' &&
                        <FormHelperText error size='small'>{errors.email.message}</FormHelperText>}
                </FormControl>
            </FormGroup>
        </form>
    )
}

export default Info;