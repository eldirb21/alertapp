import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Cards from './cards';
import Texts from './Texts';
import Switchs from './switchs';
import {icMenuDotVertical} from '../assets/images';
import moment from 'moment';
import Func from '../utils/func';

const AlarmItem = ({
  switchs,
  onSwitch,
  title,
  date,
  daily,
  onsetDay,
  onPress,
}) => {
  return (
    <Cards style={styles.card}>
      <View style={styles.content}>
        <View style={styles.flex}>
          <Texts textLinear numberOfLines={2}>
            {title}
          </Texts>
          <Texts style={styles.time}>
            {moment(date).format('hh:mm')}
            <Texts style={styles.at}>{moment(date).format(' A')}</Texts>
          </Texts>
        </View>
        <View style={styles.switchContainer}>
          <Switchs value={switchs} onValueChange={onSwitch} />

          <TouchableOpacity onPress={onPress}>
            <Image style={styles.icons} source={icMenuDotVertical} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        {Func.days.map((x, i) => (
          <TouchableOpacity
            key={i}
            style={styles.daily}
            onPress={() => onsetDay(x)}>
            <Texts style={[daily.includes(x) && styles.textColor]}>
              {Func.setDay(x)}
            </Texts>
          </TouchableOpacity>
        ))}
      </View>
    </Cards>
  );
};

export default AlarmItem;

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
  flex: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  at: {
    fontSize: 12,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#979797',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: -20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: -20,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
  },
  icons: {
    height: 20,
    width: 20,
  },
  daily: {
    marginHorizontal: 5,
  },
  textColor: {
    color: 'green',
  },
});
