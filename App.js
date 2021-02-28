import React, {useState, useEffect} from 'react';

import {Provider} from 'react-redux';
import {store, appPersist} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import Routes from './src/navigation/Routes';

import MainLoading from './src/components/ui/MainLoading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  if (isLoading) {
    return (
      <MainLoading />
    );
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={appPersist}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
};

export default App;