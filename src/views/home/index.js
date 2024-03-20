/* eslint-disable curly */
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {avatar, icKutip, icMap} from '../../assets/images';
import Texts from '../../components/Texts';
import Cards from '../../components/cards';
import AlarmComponent from '../../components/alarmComponent';
import AlarmItem from '../../components/alarm-item';
import Floats from '../../components/Floats';
import Func from '../../utils/func';

const Home = () => {
  const [isDetailAlarm, setisDetailAlarm] = useState(false);
  const dates = new Date();

  const [times, setTimes] = useState([
    {
      id: 1,
      title: 'Interview PT.Sampoerna Group',
      date: dates,
      daily: Func.days,
      active: true,
    },
    {
      id: 2,
      title: 'Bangun Pagi',
      date: dates,
      daily: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      active: false,
    },
    {
      id: 3,
      title: 'Kuliah jam 4 sore',
      date: dates,
      daily: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      active: false,
    },
    {
      id: 4,
      title: 'Kuliah jam 4 sore',
      date: dates,
      daily: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
      active: false,
    },
    {
      id: 5,
      title: 'Kuliah jam 4 sore',
      date: dates,
      daily: ['Sunday', 'Monday', 'Tuesday'],
      active: false,
    },
    {
      id: 6,
      title: 'Kuliah jam 4 sore',
      date: dates,
      daily: ['Sunday', 'Monday'],
      active: false,
    },
    {
      id: 7,
      title: 'Kuliah jam 4 sore',
      date: dates,
      daily: ['Sunday'],
      active: false,
    },
    {
      id: 8,
      title: 'Kuliah jam 4 sore',
      date: dates,
      daily: [],
      active: false,
    },
  ]);

  const toggleSwitch = item => {
    const newTimes = [...times];
    newTimes.map(x => {
      if (item.id === x.id) return (x.active = !x.active);
    });
    setTimes(newTimes);
  };

  const setDay = (day, index) => {
    const newTimes = [...times];
    newTimes[index].daily.map(x => {
      const existingDayIndex = newTimes[index].daily.indexOf(day);
      if (existingDayIndex !== -1) {
        newTimes[index].daily.splice(existingDayIndex, 1);
      } else {
        newTimes[index].daily.push(day);
      }
    });
    setTimes(newTimes);
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Image style={styles.avatar} source={avatar} />
        <View style={styles.itemSubject}>
          <Texts style={styles.names}>Manas Menon</Texts>
          <View style={styles.locationContent}>
            <Image style={styles.icLocation} source={icMap} />
            <Texts>Indonesia</Texts>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Cards style={styles.cardMotivate}>
          <Image style={styles.icKutip} source={icKutip} />
          <Texts>{`Don’t stop when you are tired STOP when you’re DONE`}</Texts>
        </Cards>

        {times.map((item, index) => {
          return (
            <AlarmItem
              title={item.title}
              date={item.date}
              daily={item.daily}
              id={item.id}
              key={index}
              switchs={item.active}
              onSwitch={() => toggleSwitch(item)}
              onPress={() => setisDetailAlarm(!isDetailAlarm)}
              onsetDay={day => setDay(day, index)}
            />
          );
        })}
      </ScrollView>

      <AlarmComponent
        visible={isDetailAlarm}
        setVisible={() => setisDetailAlarm(!isDetailAlarm)}
      />
      <Floats
        onPress={() => {
          console.log('press togle');
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
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
