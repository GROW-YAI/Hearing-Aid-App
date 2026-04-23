import { useEffect } from 'react';
import { initializeBoafoWidget } from 'boafo-accessibility-widget';

const BoafoWidgetInitializer = () => {
  useEffect(() => {
    const BOAFO_API_KEY = 'boafo_5678';
    initializeBoafoWidget(BOAFO_API_KEY);
  }, []);

  return null;
};

export default BoafoWidgetInitializer;
