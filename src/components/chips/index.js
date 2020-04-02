import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

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

const Chips = ({ data, remove }) => {

  const classes = useStyles();

  const handleDelete = (chipToDelete) => () => {
    remove(chipToDelete);
  };

  return (
    <div>
      {data.map(el => {
        return (
          <Chip
            key={el}
            variant="outlined"
            color="primary"
            label={el}
            onDelete={handleDelete(el)}
            className={classes.chip}
          />
        );
      })}
    </div>
  );
}

export default Chips;