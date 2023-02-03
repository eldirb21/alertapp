import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {dataRoot} from './data-nav';

const Stack = createStackNavigator();

export default function RootNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {dataRoot.map((x, i) => (
        <Stack.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Stack.Navigator>
  );
}
