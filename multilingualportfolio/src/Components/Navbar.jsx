import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Title from './Title';

import { withClick } from '../Constants/ClickContext';

const Navbar = ({ click, ...btnOnClick }) => (
  <nav>
    <div id="btn_zone">
      <button
        type="button"
        id="change_language"
        onClick={() => {
          btnOnClick.btnOnClick();
          click.decrementClick();
        }}
      >
        <FormattedMessage id="target" />
        {click.counter}
      </button>
    </div>
    <Title />
    <div id="link_zone">
      <Link className="internal" to="/">
        <FormattedMessage id="home" />
        {' '}
        {click.counter}
      </Link>
      <Link className="internal" to="/work">
        <FormattedMessage id="showcase" />
        {' '}
        {click.counter}
      </Link>
    </div>
  </nav>
);

export default withClick(Navbar);
