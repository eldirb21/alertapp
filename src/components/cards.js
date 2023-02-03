import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Cards = ({children, style}) => {
  return <View style={{...styles.cardContainer, ...style}}>{children}</View>;
};

export default Cards;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#3C3D3F',
    padding: 20,
    borderRadius: 16,
  },
});
