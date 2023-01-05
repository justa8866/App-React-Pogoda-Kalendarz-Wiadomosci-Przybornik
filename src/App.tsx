import React from 'react';
import { useTranslation } from 'react-i18next';

import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>Start</h1>
      <h2>Justyna</h2>
      <header className="App-header">{t('Welcome to React')}</header>
    </div>
  );
}

export default App;
