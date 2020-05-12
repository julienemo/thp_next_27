import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

import FR from './Translations/Fr';
import EN from './Translations/En';

const Messages = {
  FR: FR,
  EN: EN,
}; 

const App = () => {
  const [language, setLanguage] = useState('EN');
  const [targetLanguage, setTargetLanguage] = useState('FR');

  const toggleLanguage = () => { 
    if (language === "FR") {
      setLanguage("EN")
      setTargetLanguage("FR")
    } else { 
      setLanguage("FR")
      setTargetLanguage("EN")
    }
  }

  return (
    <IntlProvider locale={language} messages={Messages[language]}>
      <h1>{Messages[language].title}</h1>
      <button onClick={toggleLanguage}>change to {targetLanguage}</button>
      <p>{Messages[language].presentation}</p>
      <p>{Messages[language].work}</p>
      <p>{Messages[language].contact}</p>
    </IntlProvider>
  );
};

export default App;
