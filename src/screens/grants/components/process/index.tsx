/* eslint-disable @next/next/no-img-element */
import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { steps } from './utils';

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
      {/* steps */}
      <div>
        {steps.map((x, i) => {
          return (
            <div key={x.label} className={classes.stepWrapper}>
              <Typography variant="h2" className={classnames(classes.stepTitle, 'step', `step-${i+1}`)}>
                #{i + 1}
              </Typography>
              <Typography variant="h3" className={classes.stepTitle}>
                {x.label}
              </Typography>
              <Typography className={classes.stepDetails}>
                {x.details}
              </Typography>
              <img src={x.imageUrl} alt={x.label} className={classnames(classes.stepImage, x.label.toLowerCase())}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Process;
