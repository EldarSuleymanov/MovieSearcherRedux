import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigation} from './navigation/tab';
import {Provider} from 'react-redux';
// import persistor from './redux/store';
// import store from './redux/store';

import {PersistGate} from 'redux-persist/integration/react';
import {configureStore} from './redux/store';

const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
