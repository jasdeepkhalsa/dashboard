import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

describe('App test', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });
});
