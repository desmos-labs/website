import { useState } from 'react';
import copy from 'copy-to-clipboard';

export const useDonateHook = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [key, setKey] = useState<string>('');
  const handleCopiedClose = () => {
    setCopied(false);
  };
  const handleCopy = (value: string, keyValue:string) => {
    copy(value);
    setCopied(true);
    setKey(keyValue);
  };

  return {
    copied,
    handleCopiedClose,
    handleCopy,
    key,
  };
};
