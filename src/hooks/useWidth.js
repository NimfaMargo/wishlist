import { useState, useEffect, useCallback } from 'react';

const useWidth = (refElement) => {
  const [currentWidth, setCurrentWidth] = useState(null);

  const updateWidth = useCallback(() => {
    if (refElement) {
      const { width } = refElement.getBoundingClientRect();
      setCurrentWidth(width);
    }
  }, [refElement]);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [updateWidth]);

  return [currentWidth];
};

export default useWidth;
