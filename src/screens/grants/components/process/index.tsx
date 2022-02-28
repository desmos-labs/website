import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const Process: React.FC<{ className?: string }> = (props) => {
  const classes = useStyles();
  return (
    <div className={classnames(props.className, classes.root)}>
      <Typography
            variant="h1"
            className={classes.title}
          >
            Application Process
          </Typography>
    </div>
  )
}

export default Process;
