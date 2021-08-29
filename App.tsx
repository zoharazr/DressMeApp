import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import {Provider} from 'react-redux';
import store, {sagaMiddleware} from './src/store';
import mainSaga from './src/sagas/mainSaga';
import MainStack from './src/navigation/MainStack';
import {WHITE} from './src/constants/colors';

LogBox.ignoreLogs(['Setting a timer']);

sagaMiddleware.run(mainSaga);

Orientation.lockToPortrait();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: WHITE,
    card: WHITE,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
