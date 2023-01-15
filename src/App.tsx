import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';
import i18n from './location/i18';
import RootNavigator from './navigation/RootNavigator';

function App(): JSX.Element {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </I18nextProvider>
  );
}

export default App;
