import React from 'react';
import { Typography } from '@material-ui/core';
import { GRANTS_FORM } from '@api';

export const steps: {
  label: string;
  details: string | React.ReactNode;
  imageUrl: string;
}[] = [
  {
    label: 'Application',
    details: (
      <Typography>
        Submit your <a
          className="application-link"
          target="_blank"
          href={GRANTS_FORM}
          rel="noreferrer">Application</a>
      </Typography>
    ),
    imageUrl: '/images/grant-application-application.svg',
  },
  {
    label: 'Review',
    details: 'Once submitted, our internal committee team will review your application on a rolling basis.',
    imageUrl: '/images/grant-application-review.svg',
  },
  {
    label: 'Decision',
    details: 'Applicants will be notified via email of whether their proposal has been accepted or not.',
    imageUrl: '/images/grant-application-decision.svg',
  },
  {
    label: 'Follow Up',
    details: 'After a grant has been delivered, our team will follow-up as needed regarding further support, and milestone check-ins',
    imageUrl: '/images/grant-application-follow-up.svg',
  },
]
