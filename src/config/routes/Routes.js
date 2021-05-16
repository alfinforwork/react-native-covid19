/**
 * @format
 * @flow strict-local
 */

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import {Provider} from 'react-redux';
import store from '../redux/store';
import AuthStack from './auth';
import MainLayout from './main';

export default function Routes() {
  const user = true;
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        {user ? <AuthStack /> : <MainLayout />}
      </NavigationContainer>
    </Provider>
  );
}
