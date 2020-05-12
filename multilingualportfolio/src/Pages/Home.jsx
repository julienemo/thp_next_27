import React from 'react';
import { FormattedMessage } from 'react-intl';
import ContactForm from '../Components/ContactForm';

const Home = () => {
  console.log('in home');
  return (
    <>
      <div className="text_zone">
        <p className="text">
          <FormattedMessage id="presentation" />
        </p>
        <p className="text">
          <FormattedMessage id="contact" />
        </p>
      </div>
      <div id="form_zone">
        <ContactForm />
      </div>
    </>
  );
};

export default Home;
