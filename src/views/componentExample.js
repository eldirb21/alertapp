import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Buttons from '../components/buttons';
import Texts from '../components/Texts';

const ComponentExample = () => {
  return (
    <View style={styles.container}>
      <View>
        <Texts>BUTTON</Texts>
        <Buttons style={{margin: 20}} lGradient primaryG />
        <Buttons style={{margin: 20}} lGradient />
        <Buttons style={{margin: 20}} />
        <Buttons style={{margin: 20}} bordered />

        <Buttons style={{margin: 20}} midle lGradient primaryG />
        <Buttons style={{margin: 20}} midle lGradient />
        <Buttons style={{margin: 20}} midle />
        <Buttons style={{margin: 20}} midle bordered />
      </View>
    </View>
  );
};

export default ComponentExample;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingHorizontal: 20,
  },
});
