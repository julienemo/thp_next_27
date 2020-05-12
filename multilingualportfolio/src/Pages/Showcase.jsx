import React from 'react';
import { FormattedMessage } from 'react-intl';

const Showcase = () => {
  console.log('in Showcase');
  return (
    <div>
      <p>
        <FormattedMessage id="work" />
      </p>
    </div>
  );
};

export default Showcase;
