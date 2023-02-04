import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {icPlus} from '../assets/images';

export default function Floats({primaryG, title, style, ...props}) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={
        primaryG
          ? ['#C847F4', '#9C4DF5', '#6E54F7']
          : ['#F4479A', '#A74ECF', '#6E54F7']
      }
      style={{...styles.linearGradient, ...style}}>
      <TouchableOpacity style={styles.btn} {...props}>
        <Image style={styles.icon} source={icPlus} />
      </TouchableOpacity>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 100,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  btn: {
    padding: 14,
    alignItems: 'center',
    borderRadius: 8,
  },
  icon: {
    height: 14,
    margin: 15,
    width: 14,
  },
});
