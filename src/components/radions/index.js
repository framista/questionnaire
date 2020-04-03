import React from 'react';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import './radions.css'

const Radions = ({data, toggle}) => {

  const handleChange = (event, content) => {
    const selected = event.target.value;
    toggle({content, selected});
  };

  return (
    <div>
      {data.map(el => {
        return (
          <div className="container__question">
            <Typography>{el.content}</Typography>

            <div className="question__radio">
              <Radio
                checked={el.selected === 'true'}
                onChange={e => handleChange(e, el.content)}
                value="true"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'true' }}
              />
              <Radio
                checked={el.selected === 'false'}
                onChange={e => handleChange(e, el.content)}
                value="false"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'false' }}
              />
            </div>
          </div>
        )
      })
      }
    </div>
  );
  
}

export default Radions;