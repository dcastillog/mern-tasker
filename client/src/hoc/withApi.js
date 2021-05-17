import React from 'react';
import { ApiContext } from '../contexts/api';

export const withApi = (Component) => (props) => (
  <ApiContext.Consumer>{(api) => <Component {...props} api={api} />}</ApiContext.Consumer>
);
