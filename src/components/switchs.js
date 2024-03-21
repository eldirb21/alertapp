/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';

const Switchs = ({onValueChange, value, style}) => {
  return (
    <View
      style={[
        styles.container,
        style,
        {backgroundColor: value ? '#6E54F7' : '#fff'},
      ]}>
      <Switch
        trackColor={{false: '#fff', true: '#6E54F7'}}
        thumbColor={value ? '#FFF' : '#6E54F7'}
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

export default Switchs;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
  },
});
