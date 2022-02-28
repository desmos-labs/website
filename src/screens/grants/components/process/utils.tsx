import { Typography } from '@material-ui/core';

export const steps = [
  {
    label: 'Application',
    details: (
      <Typography>
        Submit your Grants Application
      </Typography>
    ),
    icon: '',
  },
  {
    label: 'Review',
    details: 'Once submitted, our internal committee team will review your application on a rolling basis.'
  },
  {
    label: 'Decision',
    details: 'Applicants will be notified via email of whether their proposal has been accepted or not.'
  },
  {
    label: 'Follow Up',
    details: 'After a grant has been delivered, our team will follow-up as needed regarding further support, and milestone check-ins'
  },
]
