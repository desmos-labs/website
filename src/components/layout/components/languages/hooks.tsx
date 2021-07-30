import { useState } from 'react';

export const useLanguagesHook = () => {
  const [selected, setSelected] = useState({
    key: 'en',
    value: 'EN',
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = ({
    key, value,
  }:any) => {
    console.log(key, 'key');
    console.log(value, 'value');
    setSelected({
      key,
      value,
    });
  };

  return {
    anchorEl,
    handleOpen,
    handleClose,
    handleChange,
    selected,
  };
};
