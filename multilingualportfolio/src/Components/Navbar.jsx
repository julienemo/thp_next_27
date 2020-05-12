import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Title from './Title';

const Navbar = ({ ...btnOnClick }) => {
  const one = '1';
  return (
    <nav>
      <div id="btn_zone">
        <button
          type="button"
          id="change_language"
          onClick={btnOnClick.btnOnClick}
        >
          change to
          {' '}
          <FormattedMessage id="target" />
        </button>
      </div>
      <Title />
      <div id="link_zone">
        <Link className="internal" to="/">
          <FormattedMessage id="home" />
        </Link>
        <Link className="internal" to="/work">
          <FormattedMessage id="showcase" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
