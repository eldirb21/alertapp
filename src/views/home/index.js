import {Button, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {avatar, icBell, icKutip, icMap} from '../../assets/images';
import Texts from '../../components/Texts';
import Cards from '../../components/cards';
import AlarmComponent from '../../components/alarmComponent';
import CardAlarm from '../../components/CardAlarm';
import moment from 'moment';

const soundList = ['adventure', 'bliss', 'the_inspiration'];

const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDetailAlarm, setisDetailAlarm] = useState(false);
  const [toggle, settoggle] = useState(false);
  const [soundPlayerList, setSoundPlayerList] = useState(null);

  const [dataAlarm, setdataAlarm] = useState({
    time: '5:30 AM',
    daily: [
      {d: 'S', i: false},
      {d: 'M', i: false},
      {d: 'T', i: true},
      {d: 'W', i: true},
      {d: 'T', i: true},
      {d: 'F', i: true},
      {d: 'S', i: true},
    ],
  });
  const [quote, setQuote] = useState({
    quote:
      'If you respect yourself in stressful situations, it will help you see the positive ¦ It will help you see the message in the mess.',
    length: '135',
    author: 'Steve Maraboli',
    tags: ['inspire', 'self-respect', 'stress'],
    category: 'inspire',
    language: 'en',
    date: '2020-02-02',
    permalink:
      'https://theysaidso.com/quote/steve-maraboli-if-you-respect-yourself-in-stressful-situations-it-will-help-you',
    id: 'nwW3g7V0xszGDNIehz6yTgeF',
    background: 'https://theysaidso.com/img/bgs/man_on_the_mountain.jpg',
    title: 'Inspiring Quote of the day',
  });

  useEffect(() => {
    // fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://quotes.rest/qod?category=inspire', {
        headers: {
          'Content-type': 'application/json',
          // 'X-Theysaidso-Api-Secret': 'wkQpFYs3HE1diztWUISNmk7W23vsX4QE19htjrtf',
        },
      });
      const data = await response.json();
      const quoteData = data.contents?.quotes[0];
      if (quoteData) {
        setQuote(quoteData?.quote);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        <View style={{flex: 1}}>
          <Texts>{quote.quote}</Texts>
          <Texts style={styles.author}>{`"${quote.author}"`}</Texts>
        </View>
      </Cards>

      <CardAlarm
        switchValue={toggle}
        onSwitch={() => settoggle(!toggle)}
        onPress={() => setisDetailAlarm(!isDetailAlarm)}
        onDaily={i => {
          var newItem = {...dataAlarm};
          newItem.daily[i].i = !newItem.daily[i].i;
          setdataAlarm(newItem);
        }}
        data={dataAlarm}
      />

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
  author: {
    textAlign: 'right',
    marginTop: 5,
  },
});
