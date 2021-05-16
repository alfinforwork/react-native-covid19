import React from 'react';
import {View, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../../../components/pages/main/profile';
import Kesehatan from '../../../components/pages/main/kesehatan';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeStack from './home';

const Tab = createBottomTabNavigator();
export default function MainLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="home" color={color} size={25} />
          ),
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Kesehatan"
        component={Kesehatan}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="heartbeat" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user-alt" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
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
