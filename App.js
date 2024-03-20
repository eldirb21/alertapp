import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './src/nav/rootNav';

const App = () => {
  return (
    <NavigationContainer>
      <RootNav />
    </NavigationContainer>
  );
};

export default App;
