import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { addDecorator } from '@storybook/react';
import clsx from 'clsx';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// @ts-ignore
import styles from './styles.module.scss';

const MainDecorator = (story) => {
  const [islight, setIsLight] = useState(false);

  const handleSwitchTheme = useCallback(() => {
    setIsLight(!islight);
  }, [islight]);

  return (
    <>
      <button onClick={handleSwitchTheme}>Change theme</button>
      <div className={clsx(styles.app, { [styles.light]: islight })}>
        <ToastContainer autoClose={4000} hideProgressBar position="top-right" closeButton={false} />
        <Router>
          {story()}
        </Router>
      </div>
    </>
  );
};

addDecorator(MainDecorator);

export const parameters = { layout: 'fullscreen' };
