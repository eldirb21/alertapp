import {Animated, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Switchs = ({
  value = false,
  onValueChange = () => null,
  renderInsideCircle = () => null,
  disabled = false,
  gradient = false,
  activeText = 'On',
  inActiveText = 'Off',
  backgroundActive = 'green',
  backgroundInactive = 'gray',
  circleActiveColor = 'white',
  circleInActiveColor = 'white',
  circleBorderActiveColor = 'rgb(100, 100, 100)',
  circleBorderInactiveColor = 'rgb(80, 80, 80)',
  switchWidth = 40,
  switchHeight = 40,
  switchBorderRadius = 100,
  barHeight = 40,
  circleBorderWidth = 1,
  changeValueImmediately = true,
  innerCircleStyle = {alignItems: 'center', justifyContent: 'center'},
  outerCircleStyle = {},
  renderActiveText = true,
  renderInActiveText = true,
  switchLeftPx = 4,
  switchRightPx = 4,
  switchWidthMultiplier = 2,
  testID = null,
  ...props
}) => {
  const [state, setState] = useState({
    value: value,
    transformSwitch: new Animated.Value(
      value ? switchWidth / (switchLeftPx * 2) : -switchWidth / switchRightPx,
    ),
    backgroundColor: new Animated.Value(value ? 75 : -75),
    circleColor: new Animated.Value(value ? 75 : -75),
    circleBorderColor: new Animated.Value(value ? 75 : -75),
  });
  useEffect(() => {
    if (value === state.value) {
      return;
    }
    if (disabled && disabled === props.disabled) {
      return;
    }
    animateSwitch(value, () => setState({...state, value}));
  }, [value, disabled]);

  const handleSwitch = () => {
    if (disabled) {
      return;
    }
    if (value === state.value) {
      onValueChange(!state.value);
      return;
    }

    if (changeValueImmediately) {
      animateSwitch(!value);
      onValueChange(!value);
    } else {
      animateSwitch(!value, () =>
        setState({...state, value: !value}, () => onValueChange(state.value)),
      );
    }
  };

  const animateSwitch = (value, cb = () => {}) => {
    Animated.parallel([
      Animated.spring(state.transformSwitch, {
        toValue: value
          ? switchWidth / (switchLeftPx * 2)
          : -switchWidth / switchRightPx,
        useNativeDriver: false,
      }),
      Animated.timing(state.backgroundColor, {
        toValue: value ? 75 : -75,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(state.circleColor, {
        toValue: value ? 75 : -75,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(state.circleBorderColor, {
        toValue: value ? 75 : -75,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start(cb);
  };
  const {transformSwitch, backgroundColor, circleColor, circleBorderColor} =
    state;
  const interpolatedColorAnimation = backgroundColor.interpolate({
    inputRange: [-75, 75],
    outputRange: [backgroundInactive, backgroundActive],
  });

  const interpolatedCircleColor = circleColor.interpolate({
    inputRange: [-75, 75],
    outputRange: [circleInActiveColor, circleActiveColor],
  });

  const interpolatedCircleBorderColor = circleBorderColor.interpolate({
    inputRange: [-75, 75],
    outputRange: [circleBorderInactiveColor, circleBorderActiveColor],
  });
  // console.log(transformSwitch);
  // console.log(value);

  return (
    <TouchableWithoutFeedback onPress={handleSwitch}>
      {gradient ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#C847F4', '#9C4DF5', '#6E54F7']}
          style={{...styles.container}}>
          <Animated.View
            style={[
              styles.animatedContainer,
              {
                left: transformSwitch,
                width: switchWidth * switchWidthMultiplier,
              },
            ]}>
            <Animated.View
              style={[
                styles.circle,
                {
                  borderWidth: circleBorderWidth,
                  borderColor: interpolatedCircleBorderColor,
                  backgroundColor: interpolatedCircleColor,
                  width: switchWidth,
                  height: switchHeight,
                  borderRadius: switchBorderRadius / 2,
                },
              ]}>
              {renderInsideCircle()}
            </Animated.View>
          </Animated.View>
        </LinearGradient>
      ) : (
        <Animated.View
          style={[
            styles.container,
            {
              backgroundColor: interpolatedColorAnimation,
              width: switchWidth * switchWidthMultiplier,
              height: barHeight || switchHeight,
              borderRadius: switchBorderRadius,
            },
          ]}>
          <Animated.View
            style={[
              styles.animatedContainer,
              {
                left: transformSwitch,
                width: switchWidth * switchWidthMultiplier,
              },
            ]}>
            <Animated.View
              style={[
                styles.circle,
                {
                  // borderWidth: circleBorderWidth,
                  // borderColor: interpolatedCircleBorderColor,
                  // backgroundColor: interpolatedCircleColor,
                  // width: switchWidth,
                  // height: switchHeight,
                  // borderRadius: switchBorderRadius / 2,
                },
              ]}>
              {renderInsideCircle()}
            </Animated.View>
          </Animated.View>
        </Animated.View>
      )}
    </TouchableWithoutFeedback>
  );
};

export default Switchs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    width: 70,
    height: 40,
    borderRadius: 30,
  },
  animatedContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    alignSelf:'center'
  },
});
