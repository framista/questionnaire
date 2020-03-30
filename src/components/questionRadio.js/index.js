import React from 'react';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import './questionRadio.css'

const QuestioRadio = () => {
  const [selectedValue, setSelectedValue] = React.useState('none');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="container__question">
      <Typography>swim</Typography>
      <div className="question__radio">
        <Radio
          checked={selectedValue === 'true'}
          onChange={handleChange}
          value="true"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'true' }}
        />
        <Radio
          checked={selectedValue === 'false'}
          onChange={handleChange}
          value="false"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'false' }}
        />
      </div>
    </div>
  );
}

export default QuestioRadio;