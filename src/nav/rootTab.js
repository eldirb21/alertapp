import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {dataTab} from './data-nav';
import {
  icClock,
  icClockBlue,
  icFlame,
  icFlameBlue,
  icHome,
  icHomeBlue,
  icUser,
  icUserBlue,
} from '../assets/images';

const Tab = createBottomTabNavigator();

const {height, width} = Dimensions.get('window');

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.itemContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        var iconName = '';
        switch (label) {
          case 'Home':
            iconName = isFocused ? icHomeBlue : icHome;
            break;
          case 'Activity':
            iconName = isFocused ? icFlameBlue : icFlame;
            break;
          case 'Alarm':
            iconName = isFocused ? icClockBlue : icClock;
            break;
          case 'Profile':
            iconName = isFocused ? icUserBlue : icUser;
            break;
          default:
            iconName = isFocused ? icHomeBlue : icHome;
            break;
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btnTab}>
            <Image style={styles.icTab} source={iconName} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const RootTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      {dataTab.map((x, i) => (
        <Tab.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Tab.Navigator>
  );
};

export default RootTab;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#212327',

    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: -28,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnTab: {
    margin: 1,
    width: width / 4 - 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  icTab: {
    width: 40,
    height: 40,
  },
});
