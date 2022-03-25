import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { addDecorator } from '@storybook/react';

import styles from './styles.module.scss';

const MainDecorator = (story) => {
  const [islight, setIsLight] = useState(false);

  const handleSwitchTheme = useCallback(() => {
    setIsLight(!islight);
  }, [islight]);
  return (
  <Router>
    <div className={islight ? styles.light : ''}>
      <button onClick={handleSwitchTheme}>Theme switcher</button>
      {story()}
    </div>
  </Router>);
};

addDecorator(MainDecorator);

export const parameters = { layout: 'fullscreen' };
