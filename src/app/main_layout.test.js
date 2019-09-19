import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './main_layout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
