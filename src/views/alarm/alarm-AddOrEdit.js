import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Headers from '../../components/headers';
import DatePicker from 'react-native-date-picker';
import Texts from '../../components/Texts';
import {arrowDown, arrowRight, icPensil} from '../../assets/images';
import Switchs from '../../components/switchs';
import LinearGradient from 'react-native-linear-gradient';
import Func from '../../utils/func';

const AlarmAddOEdit = ({navigation}) => {
  const [showedit, setshowedit] = useState(false);
  const [Inputs, setInputs] = useState({
    title: '',
    subtitle: '',
    date: new Date(),
    daily: '',
    sounds: '',
    vibrate: true,
  });

  const setEdit = () => setshowedit(!showedit);

  const handleChange = (value, key) => {
    console.log(value, key);
    let newInput = {...Inputs};
    newInput[key] = value;

    setInputs(newInput);
  };

  const onSave = () => {
    console.log(Inputs);
  };
  return (
    <View style={styles.container}>
      <Headers
        textBtnLinear
        title={'Set Alarm'}
        textBtn={'Save'}
        onBack={() => navigation.goBack()}
        setRight={onSave}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 15,
          }}>
          {showedit || Inputs.title === '' ? (
            <TextInput
              value={Inputs.title}
              onChangeText={val => handleChange(val, 'title')}
              placeholder="Subject alert"
              placeholderTextColor={'grey'}
              style={{
                paddingHorizontal: 5,
                borderBottomWidth: 1,
                borderColor: 'red',
                minWidth: '50%',
                padding: 0,
                margin: 0,
                color: '#FFF',
              }}
            />
          ) : (
            <Texts
              style={{
                paddingHorizontal: 5,
                minWidth: '50%',
                padding: 4,
                margin: 0,
                color: '#FFF',
              }}>
              {Inputs.title}
            </Texts>
          )}
          <TouchableOpacity onPress={setEdit}>
            <Image
              style={{width: 15, height: 15, marginLeft: 20}}
              source={icPensil}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 20,
            marginBottom: 20,
          }}>
          <DatePicker
            modal={false}
            mode="time"
            theme="dark"
            androidVariant="nativeAndroid"
            fadeToColor="red"
            textColor="white"
            date={Inputs.date}
            onConfirm={val => handleChange(val, 'date')}
          />
        </View>
      </View>
      <View style={{...styles.item}}>
        <View style={{...styles.row, marginBottom: 3}}>
          <Texts style={styles.label}>Repeat</Texts>
          <Image style={styles.arrows} source={arrowDown} />
        </View>
        <View style={styles.row}>
          {Func.days.map((item, index) => {
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
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    padding: 6,
                    alignItems: 'center',
                  }}>
                  <Texts style={{fontSize: 12}}>{Func.setDay3(item)}</Texts>
                </TouchableOpacity>
              </LinearGradient>
            );
          })}
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
        <Switchs value={true} />
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
    borderRadius: 6,
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginBottom: 30,
  },
});
