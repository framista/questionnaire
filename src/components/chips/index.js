import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const mapStateToProps = state => ({
  programmingLanguages: state.programmingLanguages,
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const Chips = (state) => {

  const { programmingLanguages } = state;
  
  const classes = useStyles();
  
  const [chipData, setChipData] = useState(
    programmingLanguages.map((language, index) => {
      return { key: index, label: language }
    })
  )

  useEffect(() => {
    setChipData(programmingLanguages.map((language, index) => {
      return { key: index, label: language }
    }))
  }, [programmingLanguages.join('')])

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <div>
      {chipData.map((data) => {
        return (
          <Chip
            key={data.key}
            variant="outlined"
            color="primary"
            label={data.label}
            onDelete={handleDelete(data)}
            className={classes.chip}
          />
        );
      })}
    </div>
  );
}

export default connect(mapStateToProps)(Chips);