import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import Profile from '~/pages/Profile';
import Delivery from './Delivery.routes';

import colors from '~/styles/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function createRouter(signedIn = false) {
  return (
    <NavigationContainer>
      {signedIn ? (
        <>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: colors.primary,
              inactiveTintColor: colors.gray,
            }}
          >
            <Tab.Screen
              name="Delivery"
              component={Delivery}
              options={{
                tabBarLabel: 'Entregas',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="reorder" size={size} color={color} />
                ),
              }}
            />

            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: 'Meu Perfil',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="account-circle" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
