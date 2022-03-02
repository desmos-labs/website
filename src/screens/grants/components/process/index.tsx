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
      <div className={classes.stepBodyWrapper}>
        {steps.map((x, i) => {
          const isComponent = React.isValidElement(x.details);
          return (
            <div key={x.label} className={classnames(classes.stepWrapper, 'step-wrapper', `step-wrapper-${i+1}`, {
              even: i % 2 === 0,
              odd: i % 2 > 0,
            })}>
              <div className={classes.stepFlex}>
                <div className="text-wrapper">
                <Typography variant="h3" className={classes.stepTitle}>
                  {x.label}
                </Typography>
                {isComponent ? (
                  <div className={classes.stepDetails}>
                    {x.details}
                  </div>
                ): (
                  <Typography className={classes.stepDetails}>
                    {x.details}
                  </Typography>
                )}
                </div>
                <img src={x.imageUrl} alt={x.label} className={classnames(classes.stepImage, x.label.toLowerCase())}/>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Process;
