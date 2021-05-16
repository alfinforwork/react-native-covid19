/**
 * @format
 * @flow strict-local
 */

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import Home from '../../../../components/pages/main/home';

const Stack = createStackNavigator();
export default function HomeStack() {
  const scheme = useColorScheme();
  return (
    <Stack.Navigator headerMode="none" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tes" component={Tes} />
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

function Tes({navigation}) {
  return <Button onPress={() => navigation.push('Home')} title="Home" />;
}
