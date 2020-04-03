import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';


const Checkboxes = ({ data, toggle }) => {

    const handleToggle = (event, content) => {
        toggle(content)
    }

    return (
        <div>
            {data.map(el => {
                return (
                    <FormControlLabel
                        control={
                            < Checkbox
                                checked={el.valid}
                                name={el.content}
                                color="primary"
                            />
                        }
                        onChange={e => handleToggle(e, el.content)}
                        label={el.content}
                        key={el.content}
                    />
                );
            })}
        </div>
    )
    
}

export default Checkboxes;