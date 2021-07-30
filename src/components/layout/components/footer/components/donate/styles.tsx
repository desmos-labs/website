import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => {
    return (
      createStyles({
        root: {
          '& h1': {
            margin: 0,
            textAlign: 'center',
            fontWeight: 500,
          },
          '& .single-donation': {
            margin: '1rem 0',
            '& .single-donation__header': {
              display: 'flex',
              alignItems: 'flex-end',
              '& h3': {
                margin: 0,
                fontWeight: 500,
                marginRight: '0.5rem',
              },
              '& svg': {
                fontSize: '1.4rem',
                '& path': {
                  fill: '#c1bdbd',
                },
              },
            },
            '& p': {
              margin: 0,
              lineHeight: 2,
              wordBreak: 'break-all',
            },
          },
          [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {

          },
          [getMinMediaQuery(theme?.breakpoints?.values?.desktop)]: {

          },

        },
      }));
  });
  return {
    classes: useStyles(),
  };
};
