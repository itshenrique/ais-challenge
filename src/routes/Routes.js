import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PkmnListScreen from '../screens/PkmnList/PkmnList.screen';
import PkmnDetailsScreen from '../screens/PkmnDetails/PkmnDetails.screen';
import {translate} from '../locales';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PkmnList"
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'tomato',
          headerStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen
          name="PkmnList"
          component={PkmnListScreen}
          options={{
            title: translate('pokemonCardsList'),
          }}
        />
        <Stack.Screen
          name="PkmnDetails"
          component={PkmnDetailsScreen}
          options={{
            title: 'Detalhe do Pokemon',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
