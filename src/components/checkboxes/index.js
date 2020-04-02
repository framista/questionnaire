import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';


const Checkboxes = ({ data, toggle }) => {

    const handleToogle = (event, content) => {
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
                        onChange={e => handleToogle(e, el.content)}
                        label={el.content}
                        key={el.content}
                    />
                );
            })}
        </div>
    )
    
}

export default Checkboxes;