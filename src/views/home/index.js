/* eslint-disable curly */
import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Texts from '../../components/Texts';
import Cards from '../../components/cards';
import AlarmComponent from '../../components/alarmComponent';
import AlarmItem from '../../components/alarm-item';
import Func from '../../utils/func';
import AnalogClock from 'react-native-clock-analog';
import CircularClock from '../../components/circular-clock';

const Home = () => {
  const [isDetailAlarm, setisDetailAlarm] = useState(false);
  const dates = new Date();
  const d = new Date();
  let second = d.getSeconds();
  let minute = d.getMinutes();
  let hour = d.getHours()
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState([]);


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

  ]);

  useEffect(() => {
    fetchQuote()
  }, [])
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://zenquotes.io/api/quotes');
      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  const toggleSwitch = item => {
    const newTimes = [...times];
    newTimes.map(x => {
      if (item.id === x.id) return (x.active = !x.active);
    });
    setTimes(newTimes);
  };

  const setDay = (day, index) => {
    const newTimes = [...times];
    const existingDayIndex = newTimes[index].daily.indexOf(day);

    newTimes[index].daily.map(x => {
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
      <Texts style={styles.greeting}>{Func.getGreeting()}</Texts>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Cards style={styles.cardMotivate}>
          {quotes[0] && [quotes[0]].map((quote, index) => (
            <Texts key={index}>"{quote.q}" - {quote.a}</Texts>
          ))}
        </Cards>

        <View style={styles.clockContainer}>
          {/* <CircularClock/> */}
          <AnalogClock
            key={0}
            colorClock="white"
            colorNumber="#000000"
            colorCenter="#00BCD4"
            colorHour="#FF8F00"
            colorMinutes="#FFC400"
            hour={hour}
            minutes={minute}
            seconds={second}
            autostart={true}
            showSeconds
          />
        </View>

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

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  greeting: {
    margin: 20,
    fontSize: 22,
    fontWeight: 'bold'
  },
  clockContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  cardMotivate: {
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: 'transparent',
    borderWidth: .6,
    borderColor: '#FFF'
  },
});
