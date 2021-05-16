import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from '../../../components/pages/auth/Intro';
import Login from '../../../components/pages/auth/Login';

export default function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Awal"
      headerMode="none"
      screenOptions={screenOptions}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Login} />
    </Stack.Navigator>
  );
}

const screenOptions = {
  cardStyle: {backgroundColor: 'transparent'},
  cardStyleInterpolator: ({current, closing}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
};
