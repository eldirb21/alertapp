import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {avatar, icBell, icKutip, icMap} from '../../assets/images';
import Texts from '../../components/Texts';
import Cards from '../../components/cards';

const Home = () => {
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
          paddingRight: 4,
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
        <Texts>{`Don’t stop when you are tired STOP when you’re DONE`}</Texts>
      </Cards>

      <Cards>
        <Texts textLinear>Scheduled Alarm</Texts>
        <Texts style={{fontSize: 32, fontWeight: 'bold'}}>
          5:30 <Texts style={{fontSize: 24}}>AM</Texts>
        </Texts>
      </Cards>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
