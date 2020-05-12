import React, { createContext } from 'react';


const ClickContext = createContext('');

export const withClick = (Component) => (props) => (
  <ClickContext.Consumer>
    {(value) => <Component {...props} click={value} />}
  </ClickContext.Consumer>
);

export default ClickContext;
