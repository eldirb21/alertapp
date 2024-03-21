import {StyleSheet, View} from 'react-native';
import React from 'react';
import Texts from '../../components/Texts';
import Cards from '../../components/cards';
import Switchs from '../../components/switchs';
import Floats from '../../components/Floats';
import Headers from '../../components/headers';

const Alarm = props => {
  const AddOrEdit = () => {
    props.navigation.navigate('AlarmAddOEdit', {...props});
  };
  return (
    <View style={styles.container}>
      <Headers
        textBtnLinear
        title={'Alarm'}
        textBtn={'Edit'}
        setRight={() => AddOrEdit()}
      />

      <View>
        {[1, 1].map((item, index) => {
          return (
            <Cards
              key={index}
              gradient
              primaryG={index === 0}
              linerStyle={{marginBottom: 15}}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Texts style={styles.lable}>Morning Alarm</Texts>
                <Texts style={styles.timer}>5:30</Texts>
                <Texts style={styles.dates}>Mon, Tue, Thru, Fri</Texts>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                }}>
                <Switchs
                  style={{width: 45}}
                  onValueChange={() => {}}
                  value={false}
                />
                <Texts>12h 28m</Texts>
              </View>
            </Cards>
          );
        })}
      </View>

      <Floats primaryG onPress={() => AddOrEdit()} />
    </View>
  );
};

export default Alarm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Oxygen',
    fontSize: 24,
    fontWeight: 'bold',
  },
  edit: {
    fontFamily: 'Oxygen',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lable: {
    fontFamily: 'Oxygen',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timer: {
    fontFamily: 'Oxygen',
    fontSize: 40,
    fontWeight: 'bold',
  },
  dates: {
    fontFamily: 'Oxygen',
    fontSize: 12,
  },
});
