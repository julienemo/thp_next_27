import React from 'react';
import { FormattedMessage } from 'react-intl';

const Showcase = () => {
  console.log('in Showcase');
  return (
    <div className="text_zone">
      <p className="text">
        <FormattedMessage id="work" />
      </p>
    </div>
  );
};

export default Showcase;
