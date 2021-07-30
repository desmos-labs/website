import { makeStyles } from '@material-ui/styles';

export const useGetStyles = (color) => {
  const useStyles = makeStyles({
    root: {
      '& .selected-button': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: color || 'white',
        '&:hover': {
          cursor: 'pointer',
        },
        '& svg': {
          fontSize: '1.3rem',
          marginRight: '0.1rem',
          fill: color || 'white',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
