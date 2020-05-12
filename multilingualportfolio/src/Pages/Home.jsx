import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = () => {
  console.log('in home');
  return (
    <div>
      <p>
        <FormattedMessage id="presentation" />
      </p>
      <p>
        <FormattedMessage id="contact" />
      </p>
    </div>
  );
};

export default Home;
