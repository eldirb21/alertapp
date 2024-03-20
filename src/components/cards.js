/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Cards = ({children, gradient, primaryG, linerStyle, style}) => {
  return gradient ? (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={
        primaryG
          ? ['#C847F4', '#9C4DF5', '#6E54F7']
          : ['#F4479A', '#A74ECF', '#6E54F7']
      }
      style={{...styles.linearGradient, ...linerStyle}}>
      <View
        style={{
          ...styles.cardContainer,
          ...style,
          backgroundColor: 'transparent',
        }}>
        {children}
      </View>
    </LinearGradient>
  ) : (
    <View style={{...styles.cardContainer, ...style}}>{children}</View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#3C3D3F',
    padding: 20,
    borderRadius: 16,
  },
  linearGradient: {
    borderRadius: 16,
  },
});
