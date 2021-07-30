import React from 'react';
import { useTranslation } from 'i18n';
import {
  Dialog,
  DialogContent,
  Snackbar,
} from '@material-ui/core';
import { FileCopyOutlined } from '@material-ui/icons';
import { useGetStyles } from './styles';
import { donationData } from './utils';
import { useDonateHook } from './hooks';

const Donate = (props: any) => {
  const {
    open,
    handleClose,
  } = props;
  const { classes } = useGetStyles();
  const { t } = useTranslation(['common']);

  const {
    copied,
    handleCopiedClose,
    handleCopy,
    key,
  } = useDonateHook();

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={copied}
        autoHideDuration={5000}
        onClose={handleCopiedClose}
        message={`${t('copied', {
          key,
        })}`}
      />
      <Dialog className={classes.root} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogContent>
          <h1>{t('donation')}</h1>
          <p>{t('donationContent')}</p>
          <div>
            {donationData.map((x) => {
              return (
                <div key={x.key} className="single-donation">
                  <div className="single-donation__header">
                    <h3>{x.key}</h3>
                    <span onClick={() => handleCopy(x.address, x.key)} role="button">
                      <FileCopyOutlined />
                    </span>
                  </div>
                  <p>{x.address}</p>
                </div>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Donate;
