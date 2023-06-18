import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Cards from './cards';
import Texts from './Texts';
import Switchs from './switchs';
import {icMenuDotVertical} from '../assets/images';

const CardAlarm = ({onSwitch, switchValue, onPress, data, onDaily}) => {
  return (
    <Cards>
      <View style={styles.content}>
        <View>
          <Texts textLinear>Scheduled Alarm</Texts>
          <Texts style={styles.time}>{data.time}</Texts>
        </View>
        <View>
          <View style={styles.switch}>
            <Switchs onSwitch={onSwitch} visible={switchValue} />
            <TouchableOpacity onPress={onPress}>
              <Image style={styles.dot} source={icMenuDotVertical} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.daily}>
        {data.daily.map((x, i) => {
          return (
            <TouchableOpacity
              key={i}
              activeOpacity={0.9}
              onPress={() => onDaily(i)}>
              <Texts
                key={i}
                style={{
                  marginHorizontal: 2,
                  fontWeight: x.i ? '800' : '200',
                }}>
                {x.d}
              </Texts>
            </TouchableOpacity>
          );
        })}
      </View>
    </Cards>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    marginLeft: 5,
    height: 30,
    width: 20,
  },
  daily: {
    backgroundColor: '#979797',
    marginHorizontal: -20,
    marginBottom: -20,
    marginTop: 10,
    padding: 15,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CardAlarm;
