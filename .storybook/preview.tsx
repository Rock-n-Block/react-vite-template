import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { addDecorator } from '@storybook/react';

const MainDecorator = (story) => {
  return <Router>{story()}</Router>;
};

addDecorator(MainDecorator);

export const parameters = { layout: 'fullscreen' };
