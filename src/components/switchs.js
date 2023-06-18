import React, {useEffect} from 'react';
import {TouchableWithoutFeedback, Animated, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Switchs = props => {
  const {onSwitch = () => {}} = props;
  const transformSwitch = new Animated.Value(props.visible ? 1 : 0);

  const handleSwitch = () => {
    onSwitch();
  };
  useEffect(() => {
    if (props.visible || !props.visible) {
      Animated.spring(transformSwitch, {
        toValue: props.visible ? 1 : 0,
        useNativeDriver: false,
      }).start();
    }
  }, [props.visible]);

  const transform = {
    translateX: transformSwitch.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 35],
    }),
  };

  return (
    <TouchableWithoutFeedback onPress={handleSwitch}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={props.colors ? props.colors : ['#C847F4', '#9C4DF5', '#6E54F7']}
        style={styles.container}>
        <Animated.View style={[styles.switch, {transform: [transform]}]} />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Switchs;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 35,
    borderRadius: 100,
    justifyContent: 'center',
  },
  switch: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: 'white',
  },
});
