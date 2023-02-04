import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  arrowRight,
  avatar,
  bgProfile,
  icMap,
  icPensil,
  icSettings,
  sunRise,
} from '../../assets/images';
import Texts from '../../components/Texts';
import Headers from '../../components/headers';

const User = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground style={styles.profileBg} source={bgProfile}>
          <Headers title={'Profile'} iconRight={icSettings} />
          <View style={styles.editContainer}>
            <Image style={styles.icons} source={icPensil} />
            <Texts>Edit</Texts>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image style={styles.sunrise} source={sunRise} />
            <Texts style={{marginLeft: 10, fontSize: 16, fontWeight: 'bold'}}>
              5:30 AM
            </Texts>
          </View>
        </ImageBackground>
        <View style={{flex: 1, padding: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.avatar} source={avatar} />
            <View style={styles.itemSubject}>
              <Texts style={styles.names}>Manas Menon</Texts>
              <View style={styles.locationContent}>
                <Image style={styles.icLocation} source={icMap} />
                <Texts>Indonesia</Texts>
              </View>
            </View>
          </View>

          <View style={{marginTop: 30}}>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.row,
                    {
                      padding: 20,
                      backgroundColor: '#353535',
                      marginBottom: 10,
                      borderRadius: 16,
                    },
                  ]}>
                  <Texts
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Add New Goal
                  </Texts>
                  <Image style={styles.arrows} source={arrowRight} />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  profileBg: {
    height: 200,
    paddingLeft: 20,
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  icons: {
    width: 20,
    height: 20,
    marginRight: 10,
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
  sunrise: {
    width: 25,
    height: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrows: {
    width: 30,
    height: 30,
  },
});
