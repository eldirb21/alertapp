import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Headers from '../../components/headers';
import DatePicker from 'react-native-date-picker';
import Texts from '../../components/Texts';
import {arrowDown, arrowRight, icPensil} from '../../assets/images';
import Switchs from '../../components/switchs';
import LinearGradient from 'react-native-linear-gradient';

const AlarmAddOEdit = ({navigation}) => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Headers
        textBtnLinear
        title={'Set Alarm'}
        textBtn={'Save'}
        onBack={() => navigation.goBack()}
        setRight={() => {
          console.log('right press');
        }}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 15,
          }}>
          <Texts>Alarm Name</Texts>
          <Image
            style={{width: 15, height: 15, marginLeft: 20}}
            source={icPensil}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 20,
            marginBottom:20
          }}>
          <DatePicker
            modal={false}
            mode="time"
            theme="dark"
            androidVariant="nativeAndroid"
            fadeToColor="red"
            textColor="white"
            date={date}
            onConfirm={date => {
              setDate(date);
            }}
          />
        </View>
      </View>
      <View style={{...styles.item}}>
        <View style={{...styles.row, marginBottom: 3}}>
          <Texts style={styles.label}>Repeat</Texts>
          <Image style={styles.arrows} source={arrowDown} />
        </View>
        <View style={styles.row}>
          {['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'].map(
            (item, index) => {
              return (
                <LinearGradient
                  key={index}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={
                    index === 6 || index === 5
                      ? ['#353535', '#353535', '#353535']
                      : ['#C847F4', '#9C4DF5', '#6E54F7']
                  }
                  style={styles.dates}>
                  <Texts>{item}</Texts>
                </LinearGradient>
              );
            },
          )}
        </View>
      </View>
      <View style={{...styles.row, ...styles.item}}>
        <View>
          <Texts style={styles.label}>Sound</Texts>
          <Texts style={styles.sound}>Bluebird</Texts>
        </View>
        <Image style={styles.arrows} source={arrowRight} />
      </View>
      <View style={{...styles.item}}>
        <Texts style={styles.label}>Volume</Texts>
      </View>
      <View style={{...styles.row, ...styles.item}}>
        <Texts style={styles.label}>Vibrate</Texts>
        <Switchs gradient value={true} />
      </View>
      <View style={{...styles.row, ...styles.item}}>
        <Texts style={styles.label}>Preview Alarm</Texts>
        <Image style={styles.arrows} source={arrowRight} />
      </View>
    </View>
  );
};

export default AlarmAddOEdit;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingHorizontal: 20,
  },
  label: {
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sound: {
    fontSize: 16,
  },
  arrows: {
    width: 30,
    height: 30,
  },
  dates: {
    padding: 10,
    borderRadius: 6,
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginBottom: 30,
  },
});
