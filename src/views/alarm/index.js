import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Buttons from '../../components/buttons';

const Alarm = () => {
  return (
    <View style={styles.container}>
      <Text>Alarm</Text>
      <Buttons style={{margin: 20}} lGradient primaryG />
      <Buttons style={{margin: 20}} lGradient />
      <Buttons style={{margin: 20}} />
      <Buttons style={{margin: 20}} bordered />

      <Buttons style={{margin: 20}} midle lGradient primaryG />
      <Buttons style={{margin: 20}} midle lGradient />
      <Buttons style={{margin: 20}} midle />
      <Buttons style={{margin: 20}} midle bordered />
    </View>
  );
};

export default Alarm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
