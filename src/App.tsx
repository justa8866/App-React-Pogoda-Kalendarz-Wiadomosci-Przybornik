import React from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';
import i18n from './location/i18';

function App() {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <div className="App">
          <h1>Start</h1>
          <h2>Justyna</h2>
          <header className="App-header">{t('common:welcomeReact')}</header>
        </div>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
