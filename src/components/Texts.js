import React from 'react';
import {Text} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';

export default function Texts({style, textLinear, ...props}) {
  const defStyle = {
    fontSize: 14,
    color: '#ffffff',
  };
  const incStyle = Array.isArray(style) ? style : [style];

  return textLinear ? (
    <LinearTextGradient
      style={style}
      locations={[0, 1]}
      colors={['#C847F4', '#6E54F7']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Text>{props.children}</Text>
    </LinearTextGradient>
  ) : (
    <Text {...props} style={[defStyle, ...incStyle]} />
  );
}
