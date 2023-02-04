import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';

const Buttons = ({
  style,
  lGradient,
  primaryG,
  bordered,
  midle,
  title,
  ...props
}) => {
  var styled = {};
  if (midle) {
    styled['width'] = '45%';
  }
  return lGradient ? (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={
        primaryG
          ? ['#C847F4', '#9C4DF5', '#6E54F7']
          : ['#F4479A', '#A74ECF', '#6E54F7']
      }
      style={{...styles.linearGradient, ...styled, ...style}}>
      <TouchableOpacity style={styles.btn} {...props}>
        <Text style={styles.btnText}>{title ? title : 'Find Out More'}</Text>
      </TouchableOpacity>
    </LinearGradient>
  ) : !bordered ? (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
      style={{...styles.linearGradient, ...styled, ...style}}>
      <TouchableOpacity style={styles.btn} {...props}>
        <LinearTextGradient
          style={styles.btnText}
          locations={[0, 1]}
          colors={['#C847F4', '#6E54F7']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text>{title ? title : 'Find Out More'}</Text>
        </LinearTextGradient>
      </TouchableOpacity>
    </LinearGradient>
  ) : (
    <TouchableOpacity
      style={{...styles.btn, ...styles.bordered, ...styled, ...style}}
      {...props}>
      <LinearTextGradient
        style={styles.btnText}
        locations={[0, 1]}
        colors={bordered ? ['#FFFFFF', '#FFFFFF'] : ['#C847F4', '#6E54F7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text>{title ? title : 'Find Out More'}</Text>
      </LinearTextGradient>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 8,
  },
  bordered: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 8,
  },
  btn: {
    padding: 14,
    alignItems: 'center',
    borderRadius: 8,
  },
  btnText: {
    borderRadius: 8,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
