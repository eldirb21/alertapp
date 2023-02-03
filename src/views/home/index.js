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

const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={{
        backgroundColor: '#000',
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <Image
            style={{
              height: 56,
              width: 56,
              borderRadius: 16,
              borderWidth: 3,
              borderColor: '#FFFFFF',
            }}
            source={avatar}
          />
          <View
            style={{
              marginLeft: 20,
            }}>
            <Texts style={{fontSize: 18, fontWeight: 'bold'}}>
              Manas Menon
            </Texts>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 14,
                  width: 12.8,
                  marginRight: 5,
                }}
                source={icMap}
              />
              <Texts>Indonesia</Texts>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{padding: 15}}>
          <Image
            style={{
              height: 19,
              width: 19,
            }}
            source={icBell}
          />
        </TouchableOpacity>
      </View>

      <Cards
        style={{
          flexDirection: 'row',
          paddingVertical: 30,
          paddingRight: 15,
          marginBottom: 20,
        }}>
        <Image
          style={{
            height: 10,
            width: 10,
            marginRight: 15,
          }}
          source={icKutip}
        />
        <Texts
          style={{
            flex: 1,
          }}>{`Don’t stop when you are tired STOP when you’re DONE`}</Texts>
      </Cards>

      <Cards>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Texts textLinear>Scheduled Alarm</Texts>
            <Texts style={{fontSize: 32, fontWeight: 'bold'}}>
              5:30 <Texts style={{fontSize: 24}}>AM</Texts>
            </Texts>
          </View>
          <View>
            <Texts textLinear>Scheduled Alarm</Texts>
            <Switchs
              barHeight={30}
              // switchWidth={50}
              // switchHeight={20}
              value={isEnabled}
              onValueChange={toggleSwitch}
              disabled={false}
              backgroundActive={'#0095ff'}
              backgroundInactive={'#d1d1d1'}
              circleActiveColor={'white'}
              circleInActiveColor={'white'}
              innerCircleStyle={{
                borderWidth: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }} // style for inner animated circle for what you (may) be rendering inside the circle
              outerCircleStyle={{}} // style for outer animated circle
              renderActiveText={false}
              renderInActiveText={false}
              switchLeftPx={3} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={3} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
              switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
              switchBorderRadius={30}
            />
            <Image style={{height: 30, width: 20}} source={icMenuDotVertical} />
          </View>
        </View>
      </Cards>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
