import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './src/nav/rootNav';
import ComponentExample from './src/views/componentExample';

const App = () => {
  // return <ComponentExample />;
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
};

export default App;
