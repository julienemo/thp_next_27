import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import FR from './Translations/Fr';
import EN from './Translations/En';

import Navbar from './Components/Navbar';
// import Showcase from './Pages/Showcase';

const Messages = {
  FR,
  EN,
};

const App = () => {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(Messages[language].target);
  };

  return (
    <IntlProvider locale={language} messages={Messages[language]}>
      <Router>
        <Navbar btnOnClick={toggleLanguage} />
        <p>{Messages[language].presentation}</p>
        <p>{Messages[language].work}</p>
        <p>{Messages[language].contact}</p>

        <Switch />
      </Router>
    </IntlProvider>
  );
};

export default App;
