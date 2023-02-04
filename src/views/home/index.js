import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  avatar,
  icBell,
  icKutip,
  icMap,
  icMenuDotVertical,
} from '../../assets/images';
import Texts from '../../components/Texts';
import Cards from '../../components/cards';
import Switchs from '../../components/switchs';
import AlarmComponent from '../../components/alarmComponent';

const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDetailAlarm, setisDetailAlarm] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <View style={styles.cardProfile}>
          <Image style={styles.avatar} source={avatar} />
          <View style={styles.itemSubject}>
            <Texts style={styles.names}>Manas Menon</Texts>
            <View style={styles.locationContent}>
              <Image style={styles.icLocation} source={icMap} />
              <Texts>Indonesia</Texts>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{padding: 15}}>
          <Image style={styles.icBell} source={icBell} />
        </TouchableOpacity>
      </View>

      <Cards style={styles.cardMotivate}>
        <Image style={styles.icKutip} source={icKutip} />
        <Texts>{`Don’t stop when you are tired STOP when you’re DONE`}</Texts>
      </Cards>

      <Cards>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <View>
            <Texts textLinear>Scheduled Alarm</Texts>
            <Texts style={{fontSize: 32, fontWeight: 'bold'}}>
              5:30 <Texts style={{fontSize: 24}}>AM</Texts>
            </Texts>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 8,
              }}>
              <Switchs
                gradient
                value={isEnabled}
                onValueChange={toggleSwitch}
                disabled={false}
              />
              <TouchableOpacity
                onPress={() => setisDetailAlarm(!isDetailAlarm)}>
                <Image
                  style={{height: 30, width: 20}}
                  source={icMenuDotVertical}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#979797',
            marginHorizontal: -20,
            marginBottom: -20,
            marginTop: 10,
            padding: 15,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}>
          <Texts>SMTWTFS</Texts>
        </View>
      </Cards>
      <AlarmComponent
        visible={isDetailAlarm}
        setVisible={() => setisDetailAlarm(!isDetailAlarm)}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingHorizontal: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  cardProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    height: 56,
    width: 56,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  itemSubject: {
    marginLeft: 20,
  },
  names: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icLocation: {
    height: 14,
    width: 12.8,
    marginRight: 5,
  },
  icBell: {
    height: 19,
    width: 19,
  },
  cardMotivate: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingRight: 15,
    marginBottom: 20,
  },
  icKutip: {
    height: 10,
    width: 10,
    marginRight: 15,
  },
});
