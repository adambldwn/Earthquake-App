// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Location,LocationDetail,Warning} from "./pages";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const myLocation = () =>{
  return(
      <Stack.Navigator>
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="LocationDetail" component={LocationDetail} />
      </Stack.Navigator>
  )
}

export const Router= ()=> {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Location') {
            iconName = focused ? 'map-marker' : 'map-marker-outline';
          } else if (route.name === 'Warning') {
            iconName = focused ? 'alert-circle' : 'alert-circle-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Location" component={myLocation} />
        <Tab.Screen name="Warning" component={Warning} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
