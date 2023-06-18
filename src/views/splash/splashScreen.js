import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ImageBackground, Text, StatusBar} from 'react-native';
import {splash} from '../../assets/images';
import moment from 'moment';

const SplashScreen = props => {
  const [day, setday] = useState(moment().format('dddd'));
  const [date, setdate] = useState(moment().format('DD MMM YYYY'));
  const [time, settime] = useState(moment().format('HH:mm a'));

  useEffect(() => {
    const timer = setInterval(() => {
      setday(moment().format('dddd'));
      setdate(moment().format('DD MMM YYYY'));
      settime(moment().format('HH:mm a'));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate('RootTab');
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ImageBackground
      onMagicTap={() => props.navigation.navigate('RootTab')}
      style={styles.content}
      resizeMode="cover"
      source={splash}>
      <StatusBar animated barStyle={'dark-content'} hidden />
      <View style={styles.day}>
        <Text style={styles.dayText}>{day}</Text>
      </View>
      <View style={styles.circle}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: '30%',
    paddingHorizontal: 20,
  },
  day: {
    width: '60%',
    alignSelf: 'flex-end',
  },
  dayText: {
    fontSize: 45,
    color: '#FFF',
    fontWeight: '600',
  },
  circle: {
    marginTop: '25%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'center',
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  date: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
  time: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
});

export default SplashScreen;
