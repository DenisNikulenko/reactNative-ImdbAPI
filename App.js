import React from 'react';

import {Provider} from 'react-redux';
import {store, appPersist} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import Routes from './src/navigation/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={appPersist}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;