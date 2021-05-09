// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Location,LocationDetail} from "./pages";

const Stack = createStackNavigator();

export const Router= ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="LocationDetail" component={LocationDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
