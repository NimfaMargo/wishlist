import { useEffect } from 'react';

const useKeypress = (key, action) => {
  useEffect(() => {
    const onKeyup = (e) => {
      if (e.key === key) {
        action();
      }
    };

    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [action, key]);
};

export default useKeypress;
