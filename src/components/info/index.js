import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectInformation,
    setInformation,
} from './infoSlice';
import { FormGroup, FormControl, InputLabel, Input, FormHelperText, Select, MenuItem } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import './info.css';
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { setDate } from '../../helper';
const Info = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const information = useSelector(selectInformation);

    // const [selectedDate, setSelectedDate] = React.useState(setDate(20));
    const minDate = setDate(80);
    const maxDate = setDate(18);

    const degreeLevelTab = ["Associate degree", "Bachelor's degree", "Master's degree", "Doctoral degree"];

    const handleDateChange = (date) => {
        const content = "dateOfBirth";
        const value = date;
        dispatch(setInformation({ content, value }));
    };
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

    // console.log(errors)

    return (
        <form className="infocontainer" onMouseLeave={handleSubmit(onSubmit)}>
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
                    // onBlur={handleSubmit(onSubmit)}
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
                        // onBlur={handleSubmit(onSubmit)}
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
                        // onBlur={handleSubmit(onSubmit)}
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
                <FormControl margin="dense">
                    <InputLabel id="demo-simple-select-label">Degree level</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={information[3].value}
                        name="degreeLevel"
                        onChange={handleChange}
                    >
                        {degreeLevelTab.map(el => (<MenuItem
                            value={el}
                            key={el}
                        >{el}</MenuItem>))};
                    </Select>
                </FormControl>
                <FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date of birth"
                            format="dd/MM/yyyy"
                            value={information[4].value}
                            onChange={handleDateChange}
                            name="dateOfBirth"
                            maxDate={maxDate}
                            maxDateMessage="You have to be adult"
                            minDate={minDate}
                            minDateMessage="Date is incorrect"
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </FormControl>
            </FormGroup>
        </form>
    )
}

export default Info;