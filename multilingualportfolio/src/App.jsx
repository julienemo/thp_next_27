import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FR from './Translations/Fr';
import EN from './Translations/En';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Showcase from './Pages/Showcase';

import ClickContext from './Constants/ClickContext';

const App = () => {
  const Messages = {
    FR,
    EN,
  };
  const [language, setLanguage] = useState('EN');
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const toggleLanguage = () => {
    setLanguage(Messages[language].target);
  };

  return (
    <ClickContext.Provider value={{
      counter,
      incrementClick: increment,
      decrementClick: decrement,
    }}
    >
      <IntlProvider locale={language} messages={Messages[language]}>
        <Router>
          <Navbar btnOnClick={toggleLanguage} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/work">
              <Showcase />
            </Route>
          </Switch>
        </Router>
      </IntlProvider>
    </ClickContext.Provider>
  );
};

export default App;
