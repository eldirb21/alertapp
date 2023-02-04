import {ImageBackground, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {bgAlarm} from '../assets/images';
import Texts from './Texts';
import Buttons from './buttons';

var dummy = {
  title: 'Rise and Shine!',
  time: '5:30',
  type: 'AM',
};
const AlarmComponent = ({visible, setVisible, data = dummy}) => {
  const setPress = () => {
    setVisible();
  };
  return (
    <Modal visible={visible} onRequestClose={setVisible}>
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={bgAlarm}>
        <Texts style={styles.title}>{data.title}</Texts>
        <View style={{marginVertical: 20}}>
          <Texts style={styles.time}>{data.time}</Texts>
          <Texts style={styles.pm}>{data.type}</Texts>
        </View>
        <Buttons
          onPress={setPress}
          style={styles.btnStop}
          bordered
          title=" Walk To Stop"
        />
      </ImageBackground>
    </Modal>
  );
};

export default AlarmComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  time: {
    fontSize: 96,
    fontFamily: 'Roboto',
  },
  pm: {
    fontSize: 16,
    fontFamily: 'Roboto',
    position: 'absolute',
    right: 10,
  },
  btnStop: {
    borderRadius: 80,
    marginTop: 40,
    width: '60%',
  },
});
