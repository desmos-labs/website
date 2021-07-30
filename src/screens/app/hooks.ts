import { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

export const useApp = () => {
  // ==========================
  // language
  // ==========================
  const { lang } = useTranslation();
  useEffect(() => {
    document.cookie = `NEXT_LOCALE=${lang}`;
  }, [lang]);

  // ==========================
  // css
  // ==========================
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
};