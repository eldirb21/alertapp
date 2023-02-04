import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Texts from './Texts';
import {icClose} from '../assets/images';

const Headers = ({
  title,
  textBtn,
  iconRight,
  textBtnLinear,
  onBack,
  setRight,
}) => {
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {onBack && (
          <TouchableOpacity onPress={onBack}>
            <Image style={styles.icClose} source={icClose} />
          </TouchableOpacity>
        )}
        <Texts style={styles.title}>{title}</Texts>
      </View>
      <TouchableOpacity onPress={setRight}>
        {textBtn && (
          <Texts textLinear={textBtnLinear} style={styles.edit}>
            {textBtn}
          </Texts>
        )}
        {iconRight && <Image style={styles.icClose} source={iconRight} />}
      </TouchableOpacity>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    marginBottom: 4,
  },
  icClose: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  title: {
    fontFamily: 'Oxygen',
    fontSize: 24,
    fontWeight: 'bold',
  },
  edit: {
    fontFamily: 'Oxygen',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
