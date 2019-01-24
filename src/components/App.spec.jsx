import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    expect(() => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        div,
      );
      ReactDOM.unmountComponentAtNode(div);
    }).not.toThrow();
  });
});
