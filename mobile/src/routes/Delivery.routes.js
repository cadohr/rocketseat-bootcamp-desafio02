import React from 'react';
import { StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '~/styles/colors';

import Deliveries from '~/pages/Deliveries';
import DeliveryDetails from '~/pages/DeliveryDetails';
import CreateProblem from '~/pages/CreateProblem';
import ViewProblems from '~/pages/ViewProblems';
import ConfirmDelivery from '~/pages/ConfirmDelivery';

const Stack = createStackNavigator();

export default function DeliveryRoutes({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#fff',
          headerTransparent: true,
        }}
        initialRouteName="Deliveries"
      >
        <Stack.Screen
          name="Deliveries"
          component={Deliveries}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeliveryDetails"
          component={DeliveryDetails}
          options={{
            headerTitle: 'Detalhes da encomenda',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Deliveries')}
              >
                <Icon name="chevron-left" size={32} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="CreateProblem"
          component={CreateProblem}
          options={{
            headerTitle: 'Informar problema',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DeliveryDetails')}
              >
                <Icon name="chevron-left" size={32} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="ViewProblems"
          component={ViewProblems}
          options={{
            headerTitle: 'Visualizar problemas',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DeliveryDetails')}
              >
                <Icon name="chevron-left" size={32} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ConfirmDelivery"
          component={ConfirmDelivery}
          options={{
            headerTitle: 'Confirmar entrega',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DeliveryDetails')}
              >
                <Icon name="chevron-left" size={32} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
}
